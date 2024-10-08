import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-teclado-gamer-razer-blackwidow',
  templateUrl: './teclado-gamer-razer-blackwidow.page.html',
  styleUrls: ['./teclado-gamer-razer-blackwidow.page.scss'],
})
export class TecladoGamerRazerBlackwidowPage implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir el producto al carrito
  addToCart() {
    const product = {
      nombre: 'Teclado Gamer Razer Blackwidow V4',
      precio: 239000,
      imagen: 'https://media.spdigital.cl/thumbnails/products/3r2pwux4_8665678f_thumbnail_512.jpg'
    };

    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir el producto al carrito', error);
    });
  }
}
