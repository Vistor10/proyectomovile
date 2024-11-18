import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ServicebdService } from 'src/app/services/servicebd.service';
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

  constructor(private router: Router, private http: HttpClient, private bd: ServicebdService) {}
  ngOnInit() {
    this.getDolarValue(); 
    this.loadCategories();
  }
  async loadCategories() {
    try {
      this.categories = await this.bd.getCategories(); 
    } catch (error) {
      console.error("Error al cargar las categorías:", error);
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

  

  async irDetalleCategoria(cat: string){
    //buscar el id correspondiente a la categoria
   // this.bd.presentAlert("1","1");
    const user = await this.bd.buscarCat(cat);
    this.idCategoria = user.id_categoria;
   // this.bd.presentAlert("2",this.idCategoria+"");
    this.bd.getProductsByCategory(this.idCategoria);
    this.router.navigate(['/gabinetes']);
  }
}
