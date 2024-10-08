import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-procesador-intel-core-i5-10400',
  templateUrl: './procesador-intel-core-i5-10400.page.html',
  styleUrls: ['./procesador-intel-core-i5-10400.page.scss'],
})
export class ProcesadorIntelCoreI510400Page implements OnInit {

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
