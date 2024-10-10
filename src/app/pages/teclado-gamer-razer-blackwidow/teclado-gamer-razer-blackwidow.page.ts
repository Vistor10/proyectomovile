import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-teclado-gamer-razer-blackwidow',
  templateUrl: './teclado-gamer-razer-blackwidow.page.html',
  styleUrls: ['./teclado-gamer-razer-blackwidow.page.scss'],
})
export class TecladoGamerRazerBlackwidowPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 2; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Teclado Gamer Razer Blackwidow V4'; // Nombre del producto
  precio: number = 239000; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/3r2pwux4_8665678f_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
