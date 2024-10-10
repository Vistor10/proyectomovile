import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-procesador-amd-ryzen7-8700-g',
  templateUrl: './procesador-amd-ryzen7-8700-g.page.html',
  styleUrls: ['./procesador-amd-ryzen7-8700-g.page.scss'],
})
export class ProcesadorAMDRyzen78700GPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 28; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Procesador AMD Ryzen™ 7 8700G'; // Nombre del producto
  precio: number = 514990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/c725qtut_80d80dd3_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
