import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-seasonic-vertexpx',
  templateUrl: './fuente-de-poder-seasonic-vertexpx.page.html',
  styleUrls: ['./fuente-de-poder-seasonic-vertexpx.page.scss'],
})
export class FuenteDePoderSEASONICVERTEXPXPage implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  // Método para añadir la fuente Seasonic VERTEX PX-1000 al carrito
  addToCart() {
    const product = {
      nombreproducto: 'Seasonic VERTEX PX-1000',
      precio: 254990,
      imagen: 'https://media.spdigital.cl/thumbnails/products/2wmybndr_f314bfdd_thumbnail_512.png'
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
