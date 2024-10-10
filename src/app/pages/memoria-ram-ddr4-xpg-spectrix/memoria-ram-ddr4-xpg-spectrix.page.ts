import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-memoria-ram-ddr4-xpg-spectrix',
  templateUrl: './memoria-ram-ddr4-xpg-spectrix.page.html',
  styleUrls: ['./memoria-ram-ddr4-xpg-spectrix.page.scss'],
})
export class MemoriaRamDdr4XPGSPECTRIXPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 22; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Memoria Ram DDR4 XPG SPECTRIX D35G'; // Nombre del producto
  precio: number = 38.990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/ngcwptyq_563b09c2_thumbnail_512.png'; // Ruta de la imagen del producto

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
