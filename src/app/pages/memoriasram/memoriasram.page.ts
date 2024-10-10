import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Asegúrate de tener el servicio importado

@Component({
  selector: 'app-memoriasram',
  templateUrl: './memoriasram.page.html',
  styleUrls: ['./memoriasram.page.scss'],
})
export class MemoriasramPage implements OnInit {

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
      'Memoria Ram Kingston FURY Renegade': 21,   // Reemplaza con el ID real del producto
      'Memoria Ram DDR4 XPG SPECTRIX D35G': 22,  // Reemplaza con el ID real del producto
      'Memoria Ram DDR4 Kingston FURY Beast': 23,  // Reemplaza con el ID real del producto
      'Memoria Ram DDR4 Corsair Vengeance': 24   // Reemplaza con el ID real del producto
    };
    return productMap[nombre] || 0; // Retorna 0 si no se encuentra el producto
  }
}
