import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-placa-madre-gigabyte-z790-ud',
  templateUrl: './placa-madre-gigabyte-z790-ud.page.html',
  styleUrls: ['./placa-madre-gigabyte-z790-ud.page.scss'],
})
export class PlacaMadreGigabyteZ790UDPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 16; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Placa Madre Gigabyte Z790 UD'; // Nombre del producto
  precio: number = 270460; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/pii2vjbr_7316916c_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
