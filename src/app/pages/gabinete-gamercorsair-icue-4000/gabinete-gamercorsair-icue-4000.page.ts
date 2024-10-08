import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-gabinete-gamercorsair-icue-4000',
  templateUrl: './gabinete-gamercorsair-icue-4000.page.html',
  styleUrls: ['./gabinete-gamercorsair-icue-4000.page.scss'],
})
export class GabineteGamercorsairIcue4000Page implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  // Método para añadir producto al carrito
  addToCart(nombreproducto: string, precio: number, imagen: string) {
    const product = {
      nombreproducto,
      precio,
      imagen
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
