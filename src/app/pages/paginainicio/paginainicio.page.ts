import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.page.html',
  styleUrls: ['./paginainicio.page.scss'],
})
export class PaginainicioPage {
  categories = [
    { name: 'Gabinetes', imgSrc: '../../assets/img/gabinetes.jpg', link: 'gabinetes' },
    { name: 'Teclados', imgSrc: '../../assets/img/teclados.jpg', link: 'teclados' },
    { name: 'Audífonos Gamer', imgSrc: '../../assets/img/audifonosgamer.jpg', link: 'audifonosgamer' },
    { name: 'Placas Madre', imgSrc: '../../assets/img/placasmadre.jpg', link: 'placasmadre' },
    { name: 'Fuentes de Poder', imgSrc: '../../assets/img/fuentesdepoder.jpg', link: 'fuentesdepoder' },
    { name: 'Memorias RAM', imgSrc: '../../assets/img/memoriasram.jpg', link: 'memoriasram' },
    { name: 'Procesadores', imgSrc: '../../assets/img/procesadores.jpg', link: 'procesadores' },
    { name: 'Tarjetas de Video', imgSrc: '../../assets/img/tarjetasdevideo.jpg', link: 'tarjetasdevideo' },
    { name: 'Monitores', imgSrc: '../../assets/img/monitores.jpg', link: 'monitores' },
  ];

  searchTerm: string = '';
  dolarValue: number | undefined;

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit() {
    this.getDolarValue(); // Llamamos a la API para obtener el valor del dólar al iniciar
  }
  getDolarValue() {
    this.http.get<any>('https://mindicador.cl/api/dolar').subscribe(
      (data) => {
        this.dolarValue = data.serie[0].valor; // Guardamos el valor del dólar
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

  onSearchSubmit() {
    const routes: { [key: string]: string } = {
      'gabinetes': '/gabinetes',
      'teclados': '/teclados',
      'audifonos gamer': '/audifonosgamer',
      'placas madre': '/placasmadre',
      'fuentes de poder': '/fuentesdepoder',
      'memorias ram': '/memoriasram',
      'procesadores': '/procesadores',
      'tarjetas de video': '/tarjetasdevideo',
      'monitores': '/monitores'
    };

    const route = routes[this.searchTerm.trim().toLowerCase()];
    if (route) {
      this.router.navigate([route]);
    }
  }
}
