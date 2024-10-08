import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-teclado-gamer-razer-huntsman',
  templateUrl: './teclado-gamer-razer-huntsman.page.html',
  styleUrls: ['./teclado-gamer-razer-huntsman.page.scss'],
})
export class TecladoGamerRazerHuntsmanPage implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir el producto al carrito
  addToCart() {
    const product = {
      nombre: 'Teclado Gamer Razer Huntsman Mini',
      precio: 109990,
      imagen: 'https://media.spdigital.cl/thumbnails/products/snyhppat_a721dfd4_thumbnail_512.jpg'
    };

    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir el producto al carrito', error);
    });
  }
}
