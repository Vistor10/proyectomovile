import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.page.html',
  styleUrls: ['./carritocompras.page.scss'],
})
export class CarritocomprasPage implements OnInit {
  cartItems: any[] = [];

  constructor(private servicebd: ServicebdService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  // Cargar productos del carrito
  async loadCartItems() {
    this.cartItems = await this.servicebd.getCartItems();
    console.log('Productos en el carrito:', this.cartItems); // Verificar productos cargados
    console.log('Total actual:', this.getTotal()); // Verificar el total en la consola
  }

  // Eliminar un producto del carrito
  async removeFromCart(idproducto: number) {
    await this.servicebd.removeFromCart(idproducto);
    this.loadCartItems(); // Recargar los elementos del carrito después de eliminar
  }

  // Calcular el total de los productos en el carrito
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.precio, 0);
  }
}
