import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-thermaltake-smart700',
  templateUrl: './fuente-de-poder-thermaltake-smart700.page.html',
  styleUrls: ['./fuente-de-poder-thermaltake-smart700.page.scss'],
})
export class FuenteDePoderThermaltakeSmart700Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 19; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Fuente de Poder Thermaltake Smart 700W'; // Nombre del producto
  precio: number = 64.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/maw61p4d_0b867802_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
