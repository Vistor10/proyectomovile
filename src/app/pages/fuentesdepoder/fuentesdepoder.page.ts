import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-fuentesdepoder',
  templateUrl: './fuentesdepoder.page.html',
  styleUrls: ['./fuentesdepoder.page.scss'],
})
export class FuentesdepoderPage implements OnInit {

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() { }

  // Método para añadir productos al carrito
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
