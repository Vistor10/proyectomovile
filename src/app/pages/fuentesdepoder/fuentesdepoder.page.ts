import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-fuentesdepoder',
  templateUrl: './fuentesdepoder.page.html',
  styleUrls: ['./fuentesdepoder.page.scss'],
})
export class FuentesdepoderPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir producto al carrito
  addToCart(nombreproducto: string, precio: number, imagen: string) {
    const productId = this.getProductIdByName(nombreproducto); // Obtener el ID del producto según el nombre
    const product = {
      id_producto: productId,
      nombreproducto,
      precio,
      imagen
    };
    this.servicebd.addToCart(this.userId, product.id_producto, this.quantity).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }

  // Método auxiliar para obtener el ID del producto según el nombre
  getProductIdByName(nombre: string): number {
    const productMap: { [key: string]: number } = {
      'Fuente de Poder VERTEX PX-1000': 17, // Reemplaza con el ID real del producto
      'Fuente de Poder Seasonic G12-850GM': 18, // Reemplaza con el ID real del producto
      'Fuente de Poder Thermaltake Smart 700W': 19, // Reemplaza con el ID real del producto
      'Fuente de Poder CLIO ATX-700': 20  // Reemplaza con el ID real del producto
    };
    return productMap[nombre] || 0; // Retorna 0 si no se encuentra el producto
  }
}
