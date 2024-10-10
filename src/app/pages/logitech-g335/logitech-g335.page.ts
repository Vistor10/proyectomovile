import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-logitech-g335',
  templateUrl: './logitech-g335.page.html',
  styleUrls: ['./logitech-g335.page.scss'],
})
export class LogitechG335Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 12; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Audífonos Gamer Logitech G335'; // Nombre del producto
  precio: number = 129.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/wvwk9x87_25b20800_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
