import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.page.html',
  styleUrls: ['./paginainicio.page.scss'],
})
export class PaginainicioPage {
  searchTerm: string = '';

  constructor(private router: Router) {}

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
