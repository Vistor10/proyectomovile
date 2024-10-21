import { Component } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.page.html',
  styleUrls: ['./carritocompras.page.scss'],
})
export class CarritocomprasPage {
  cartItems: any[] = [];
  userId: number; // Cambia esto para obtener el userId del sistema de autenticación

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController
  ) {
    // Aquí debes obtener el userId del usuario autenticado
    this.userId = 2; // Cambia esto para que sea dinámico según la autenticación
  }

  ionViewWillEnter() {
    this.loadCartItems();
  }

  async loadCartItems() {
    try {
      this.cartItems = await this.servicebd.getCartItems(this.userId);
      console.log('Items del carrito cargados:', this.cartItems);
    } catch (error) {
      console.error('Error al cargar los items del carrito', error);
    }
  }

  addToCart(productId: number) {
    this.servicebd.addToCart(this.userId, productId, 1)
      .then(() => this.loadCartItems())
      .catch(err => console.error('Error al añadir al carrito', err));
  }

  increaseQuantity(item: any) {
    item.cantidad += 1;
    const newTotal = item.precio * item.cantidad; // Calcula el nuevo total
    this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad, newTotal)
      .then(() => this.loadCartItems())
      .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
  }

  decreaseQuantity(item: any) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      const newTotal = item.precio * item.cantidad; // Calcula el nuevo total
      this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad, newTotal)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    }
  }

  async removeFromCart(productId: number) {
    await this.servicebd.removeFromCart(this.userId, productId);
    this.loadCartItems(); // Recarga los items del carrito después de eliminar
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  goTocomprapage() {
    if (this.cartItems.length === 0) {
      alert('No tienes productos en el carrito. Agrega productos antes de continuar.');
    } else {
      this.navCtrl.navigateForward('/compra');
    }
  }
}
