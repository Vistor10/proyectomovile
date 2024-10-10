import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de tener el servicio importado

@Component({
  selector: 'app-monitor-gamer-curvo-msi-49',
  templateUrl: './monitor-gamer-curvo-msi-49.page.html',
  styleUrls: ['./monitor-gamer-curvo-msi-49.page.scss'],
})
export class MonitorGamerCurvoMSI49Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 36; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Monitor Gamer Curvo MSI 49"'; // Nombre del producto
  precio: number = 1257180; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/pbgyco0j_7ae2c79b_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
