import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.page.html',
  styleUrls: ['./paginainicio.page.scss'],
})
export class PaginainicioPage {
  categories: any[] = [];
  searchTerm: string = '';
  dolarValue: number | undefined;
  idCategoria: number = 0;
  address: string = ''; // Para mostrar la dirección

  constructor(
    private router: Router,
    private http: HttpClient,
    private bd: ServicebdService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getDolarValue();
    this.loadCategories();
  }

  async loadCategories() {
    try {
      this.categories = await this.bd.getCategories();
    } catch (error) {
      console.error('Error al cargar las categorías:', error);
    }
  }

  getDolarValue() {
    this.http.get<any>('https://mindicador.cl/api/dolar').subscribe(
      (data) => {
        this.dolarValue = data.serie[0].valor;
      },
      (error) => {
        console.error('Error al obtener el valor del dólar', error);
      }
    );
  }

  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    this.searchTerm = '';
  }

  async irDetalleCategoria(cat: string) {
    const user = await this.bd.buscarCat(cat);
    this.idCategoria = user.id_categoria;
    this.bd.getProductsByCategory(this.idCategoria);
    this.router.navigate(['/gabinetes']);
  }

  async getCurrentLocation() {
    try {
      // Obtener las coordenadas
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;

      console.log(`Coordenadas obtenidas: Lat: ${lat}, Lon: ${lon}`);

      // Llamada a la API de geocodificación inversa 
      const apiKey = 'b16bc0e194424ef58e582b9722c0ad39'; // Reemplaza con tu clave de API
      const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

      this.http.get<any>(apiUrl).subscribe(
        async (response) => {
          if (response.results && response.results.length > 0) {
            this.address = response.results[0].formatted; // Dirección formateada
          } else {
            this.address = 'Dirección no encontrada';
          }

          const toast = await this.toastController.create({
            message: 'Dirección obtenida correctamente.',
            duration: 3000,
            position: 'bottom',
          });
          toast.present();
        },
        async (error) => {
          console.error('Error obteniendo la dirección:', error);
          const toast = await this.toastController.create({
            message: 'Error obteniendo la dirección. Por favor, inténtalo de nuevo.',
            duration: 3000,
            position: 'bottom',
          });
          toast.present();
        }
      );
    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);

      const toast = await this.toastController.create({
        message: 'Error obteniendo la ubicación. Por favor, inténtalo de nuevo.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}
