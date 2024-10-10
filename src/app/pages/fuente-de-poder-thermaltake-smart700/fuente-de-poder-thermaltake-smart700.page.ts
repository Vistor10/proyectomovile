import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio de base de datos

@Component({
  selector: 'app-fuente-de-poder-thermaltake-smart700',
  templateUrl: './fuente-de-poder-thermaltake-smart700.page.html',
  styleUrls: ['./fuente-de-poder-thermaltake-smart700.page.scss'],
})
export class FuenteDePoderThermaltakeSmart700Page implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  // Método para añadir la fuente Thermaltake Smart 700W al carrito
  addToCart() {
    const product = {
      nombreproducto: 'Thermaltake Smart 700W',
      precio: 64990,
      imagen: 'https://media.spdigital.cl/thumbnails/products/maw61p4d_0b867802_thumbnail_512.jpg'
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
