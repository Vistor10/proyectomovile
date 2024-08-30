import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.page.html',
  styleUrls: ['./monitores.page.scss'],
})
export class MonitoresPage {
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
      'audifonos gamer': '/audifonos-gamer',
      'placas madre': '/placas-madre',
      'fuentes de poder': '/fuentes-de-poder',
      'memorias ram': '/memorias-ram',
      'procesadores': '/procesadores',
      'tarjetas de video': '/tarjetas-de-video',
      'monitores': '/monitores'
    };

    const route = routes[this.searchTerm.trim().toLowerCase()];
    if (route) {
      this.router.navigate([route]);
    }
  }
}
