import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-gabinete-gamercorsair-icue-4000',
  templateUrl: './gabinete-gamercorsair-icue-4000.page.html',
  styleUrls: ['./gabinete-gamercorsair-icue-4000.page.scss'],
})
export class GabineteGamercorsairIcue4000Page implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 5; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Gabinete Gamer Corsair iCue 4000X'; // Nombre del producto
  precio: number = 119.000; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/88txvj8i_200d227b_thumbnail_512.png'; // Ruta de la imagen del producto

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
