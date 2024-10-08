import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importa tu servicio de carrito

@Component({
  selector: 'app-monitores',
  templateUrl: './monitores.page.html',
  styleUrls: ['./monitores.page.scss'],
})
export class MonitoresPage {
  searchTerm: string = '';

  constructor(private router: Router, private servicebd: ServicebdService) {}

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

  // Método para añadir el producto al carrito
  addToCart(nombreproducto: string, precio: number) {
    const product = {
      nombreproducto,
      precio,
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
