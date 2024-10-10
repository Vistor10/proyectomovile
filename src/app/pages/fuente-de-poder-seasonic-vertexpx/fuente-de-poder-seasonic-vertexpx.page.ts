import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-seasonic-vertexpx',
  templateUrl: './fuente-de-poder-seasonic-vertexpx.page.html',
  styleUrls: ['./fuente-de-poder-seasonic-vertexpx.page.scss'],
})
export class FuenteDePoderSEASONICVERTEXPXPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 17; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Fuente de Poder VERTEX PX-1000'; // Nombre del producto
  precio: number = 254.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/2wmybndr_f314bfdd_thumbnail_512.png'; // Ruta de la imagen del producto

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
