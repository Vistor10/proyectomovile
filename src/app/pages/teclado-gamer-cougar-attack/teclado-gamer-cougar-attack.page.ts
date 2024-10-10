import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-teclado-gamer-cougar-attack',
  templateUrl: './teclado-gamer-cougar-attack.page.html',
  styleUrls: ['./teclado-gamer-cougar-attack.page.scss'],
})
export class TecladoGamerCougarAttackPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 3; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Teclado Gamer Cougar Attack X3'; // Nombre del producto
  precio: number = 95990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/zwy4s9lw_57966fd8_thumbnail_512.png'; // Ruta de la imagen del producto

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
