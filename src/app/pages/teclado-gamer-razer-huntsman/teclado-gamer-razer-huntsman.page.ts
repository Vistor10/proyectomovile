import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-teclado-gamer-razer-huntsman',
  templateUrl: './teclado-gamer-razer-huntsman.page.html',
  styleUrls: ['./teclado-gamer-razer-huntsman.page.scss'],
})
export class TecladoGamerRazerHuntsmanPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 1; // Reemplaza con el ID del producto real
  nombreproducto: string = 'teclado gamer razer huntsman'; // Nombre del producto
  precio: number = 109990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/snyhppat_a721dfd4_thumbnail_512.jpg'; // Ruta de la imagen del producto

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir producto al carrito
  addToCart() {
    const product = {
      id_producto: this.id_producto,
      nombreproducto: this.nombreproducto,
      precio: this.precio,
      imagen: this.imagen
    };

    this.servicebd.addToCart(this.userId, product.id_producto, this.quantity).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
