import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de tener el servicio importado

@Component({
  selector: 'app-monitor-ultrawide-curvo-lg',
  templateUrl: './monitor-ultrawide-curvo-lg.page.html',
  styleUrls: ['./monitor-ultrawide-curvo-lg.page.scss'],
})
export class MonitorUltrawideCurvoLGPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 34; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Monitor Ultrawide Curvo LG 32"'; // Nombre del producto
  precio: number = 470750; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/jyho6xu9_78536bc0_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
