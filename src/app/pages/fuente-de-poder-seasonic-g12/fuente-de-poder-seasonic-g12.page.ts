import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-seasonic-g12',
  templateUrl: './fuente-de-poder-seasonic-g12.page.html',
  styleUrls: ['./fuente-de-poder-seasonic-g12.page.scss'],
})
export class FuenteDePoderSEASONICG12Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 18; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Fuente de Poder Seasonic G12-850GM'; // Nombre del producto
  precio: number = 114.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/_bist34q_687bdc0d_thumbnail_512.png'; // Ruta de la imagen del producto

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
