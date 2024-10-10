import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-memoria-ram-corsair-vengeance',
  templateUrl: './memoria-ram-corsair-vengeance.page.html',
  styleUrls: ['./memoria-ram-corsair-vengeance.page.scss'],
})
export class MemoriaRamCorsairVengeancePage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 24; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Memoria Ram DDR4 Corsair Vengeance'; // Nombre del producto
  precio: number = 25.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/r6wg8h5d_806087bc_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
