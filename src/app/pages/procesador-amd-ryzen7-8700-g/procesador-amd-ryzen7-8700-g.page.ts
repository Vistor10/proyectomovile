import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-procesador-amd-ryzen7-8700-g',
  templateUrl: './procesador-amd-ryzen7-8700-g.page.html',
  styleUrls: ['./procesador-amd-ryzen7-8700-g.page.scss'],
})
export class ProcesadorAMDRyzen78700GPage implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

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
