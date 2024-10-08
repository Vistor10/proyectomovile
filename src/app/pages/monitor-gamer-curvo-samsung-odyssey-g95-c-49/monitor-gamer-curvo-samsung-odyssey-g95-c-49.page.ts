import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de tener el servicio importado

@Component({
  selector: 'app-monitor-gamer-curvo-samsung-odyssey-g95-c-49',
  templateUrl: './monitor-gamer-curvo-samsung-odyssey-g95-c-49.page.html',
  styleUrls: ['./monitor-gamer-curvo-samsung-odyssey-g95-c-49.page.scss'],
})
export class MonitorGamerCurvoSamsungOdysseyG95C49Page implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir el producto al carrito
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
