import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-fuente-de-poder-clio-atx-700',
  templateUrl: './fuente-de-poder-clio-atx-700.page.html',
  styleUrls: ['./fuente-de-poder-clio-atx-700.page.scss'],
})
export class FuenteDePoderCLIOATX700Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 20; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Fuente de Poder Clio ATX 700'; // Nombre del producto
  precio: number = 51.040; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/lf6fjhhg_018eb41a_thumbnail_512.png'; // Ruta de la imagen del producto

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
