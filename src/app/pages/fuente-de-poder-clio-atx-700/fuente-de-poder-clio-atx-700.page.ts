import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-fuente-de-poder-clio-atx-700',
  templateUrl: './fuente-de-poder-clio-atx-700.page.html',
  styleUrls: ['./fuente-de-poder-clio-atx-700.page.scss'],
})
export class FuenteDePoderCLIOATX700Page implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  addToCart() {
    const product = {
      nombreproducto: 'CLIO ATX-700',
      precio: 51040,
      imagen: 'https://media.spdigital.cl/thumbnails/products/lf6fjhhg_018eb41a_thumbnail_512.png'
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
