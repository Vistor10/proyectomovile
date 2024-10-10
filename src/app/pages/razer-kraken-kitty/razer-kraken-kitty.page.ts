import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-razer-kraken-kitty',
  templateUrl: './razer-kraken-kitty.page.html',
  styleUrls: ['./razer-kraken-kitty.page.scss'],
})
export class RazerKrakenKittyPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 9; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Audífonos Gamer Razer Kraken Kitty Quartz'; // Nombre del producto
  precio: number = 129.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/sclrc6tz_57cd70db_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
