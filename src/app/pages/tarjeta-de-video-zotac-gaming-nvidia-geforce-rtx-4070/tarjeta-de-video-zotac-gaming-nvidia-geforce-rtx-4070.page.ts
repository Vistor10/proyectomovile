import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070',
  templateUrl: './tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070.page.html',
  styleUrls: ['./tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070.page.scss'],
})
export class TarjetaDeVideoZotacGamingNvidiaGeforceRtx4070Page implements OnInit {

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
