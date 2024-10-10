import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-seasonic-g12',
  templateUrl: './fuente-de-poder-seasonic-g12.page.html',
  styleUrls: ['./fuente-de-poder-seasonic-g12.page.scss'],
})
export class FuenteDePoderSEASONICG12Page implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  // Método para añadir la fuente Seasonic al carrito
  addToCart() {
    const product = {
      nombreproducto: 'Seasonic G12-850GM 850W',
      precio: 114990,
      imagen: 'https://media.spdigital.cl/thumbnails/products/_bist34q_687bdc0d_thumbnail_512.png'
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
