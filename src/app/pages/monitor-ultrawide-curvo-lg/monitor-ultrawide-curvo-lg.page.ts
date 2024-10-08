import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de importar tu servicio correctamente

@Component({
  selector: 'app-monitor-ultrawide-curvo-lg',
  templateUrl: './monitor-ultrawide-curvo-lg.page.html',
  styleUrls: ['./monitor-ultrawide-curvo-lg.page.scss'],
})
export class MonitorUltrawideCurvoLGPage implements OnInit {

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
