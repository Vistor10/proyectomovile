import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-procesador-intel-core-i5-10400',
  templateUrl: './procesador-intel-core-i5-10400.page.html',
  styleUrls: ['./procesador-intel-core-i5-10400.page.scss'],
})
export class ProcesadorIntelCoreI510400Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 26; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Procesador Intel® Core™ i5-10400'; // Nombre del producto
  precio: number = 162770; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/ispzb71k_2e51a77b_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
