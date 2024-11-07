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
  userId: number | null = null;

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController
  ) {}

  async ionViewWillEnter() {
    // Obtener el correo del usuario autenticado desde localStorage
    const userEmail = localStorage.getItem('correoUsuario');
    if (userEmail) {
      // Buscar el `userId` usando el correo
      const user = await this.servicebd.getCurrentUser(userEmail);
      this.userId = user ? user.id_usuario : null;
      if (this.userId) {
        this.loadCartItems();
      } else {
        console.error('Usuario no encontrado o no autenticado');
      }
    } else {
      console.error('Correo de usuario no encontrado en localStorage');
    }
  }

  async loadCartItems() {
    try {
      if (this.userId) {
        this.cartItems = await this.servicebd.getCartItems(this.userId);
        console.log('Items del carrito cargados:', this.cartItems);
      }
    } catch (error) {
      console.error('Error al cargar los items del carrito', error);
    }
  }

  addToCart(productId: number) {
    if (this.userId) {
      this.servicebd.addToCart(this.userId, productId, 1)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al añadir al carrito', err));
    }
  }

  increaseQuantity(item: any) {
    if (this.userId) {
      item.cantidad += 1;
      const newTotal = item.precio * item.cantidad;
      this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad, newTotal)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    }
  }

  decreaseQuantity(item: any) {
    if (this.userId && item.cantidad > 1) {
      item.cantidad -= 1;
      const newTotal = item.precio * item.cantidad;
      this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad, newTotal)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    }
  }

  async removeFromCart(productId: number) {
    if (this.userId) {
      await this.servicebd.removeFromCart(this.userId, productId);
      this.loadCartItems();
    }
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
