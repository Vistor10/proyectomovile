import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-tarjeta-de-video-asus-dual-nvidia-rtx4070',
  templateUrl: './tarjeta-de-video-asus-dual-nvidia-rtx4070.page.html',
  styleUrls: ['./tarjeta-de-video-asus-dual-nvidia-rtx4070.page.scss'],
})
export class TarjetaDeVideoASUSDualNvidiaRTX4070Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 29; // Reemplaza con el ID del producto real
  nombreproducto: string = 'ASUS Dual Nvidia GeForce RTX 4070'; // Nombre del producto
  precio: number = 899990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/z4gsemrj_d8c06639_thumbnail_512.png'; // Ruta de la imagen del producto

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
