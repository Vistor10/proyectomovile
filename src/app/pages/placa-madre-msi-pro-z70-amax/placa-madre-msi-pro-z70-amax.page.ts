import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-placa-madre-msi-pro-z70-amax',
  templateUrl: './placa-madre-msi-pro-z70-amax.page.html',
  styleUrls: ['./placa-madre-msi-pro-z70-amax.page.scss'],
})
export class PlacaMadreMSIPROZ70AMAXPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 15; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Placa Madre MSI PRO Z70 A MAX'; // Nombre del producto
  precio: number = 290080; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/mp6q6_y0_7308a861_thumbnail_512.jpg'; // Ruta de la imagen del producto

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
