import { Component } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-carritocompras',
  templateUrl: './carritocompras.page.html',
  styleUrls: ['./carritocompras.page.scss'],
})
export class CarritocomprasPage {
  cartItems: any[] = [];
  userEmail: string | null = null;

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  async ionViewWillEnter() {
    this.userEmail = localStorage.getItem('correoUsuario');

    if (this.userEmail) {
      try {
        await this.loadCartItems();
      } catch (error) {
        console.error('Error al cargar los items del carrito:', error);
      }
    } else {
      console.error('Correo del usuario no encontrado en localStorage o el usuario no está autenticado');
    }
  }

  async loadCartItems() {
    try {
      if (this.userEmail) {
        this.cartItems = await this.servicebd.getCartItemsByEmail(this.userEmail);
        console.log('Items del carrito cargados:', this.cartItems);
      } else {
        console.warn('Correo del usuario no disponible');
      }
    } catch (error) {
      console.error('Error al cargar los items del carrito', error);
    }
  }

  async increaseQuantity(item: any) {
    if (this.userEmail) {
      const product = await this.servicebd.getProductById(item.id_producto);
      if (product && item.cantidad < product.stock) {
        item.cantidad += 1;
        const newTotal = item.precio * item.cantidad;
        try {
          await this.servicebd.updateCartItem(this.userEmail, item.id_producto, item.cantidad, newTotal);
          await this.loadCartItems();
        } catch (err) {
          console.error('Error al actualizar la cantidad en el carrito', err);
        }
      } else if (product) {
        const alert = await this.alertController.create({
          header: 'Stock insuficiente',
          message: `Productos sobrepasan el stock. Solamente hay ${product.stock} productos en stock.`,
          buttons: ['OK']
        });
        await alert.present();
      }
    }
  }

  async decreaseQuantity(item: any) {
    if (this.userEmail && item.cantidad > 1) {
      item.cantidad -= 1;
      const newTotal = item.precio * item.cantidad;
      try {
        await this.servicebd.updateCartItem(this.userEmail, item.id_producto, item.cantidad, newTotal);
        await this.loadCartItems();
      } catch (err) {
        console.error('Error al actualizar la cantidad en el carrito', err);
      }
    }
  }

  async removeFromCart(productId: number) {
    if (this.userEmail) {
      try {
        await this.servicebd.removeFromCart(this.userEmail, productId);
        await this.loadCartItems();
      } catch (err) {
        console.error('Error al eliminar el producto del carrito', err);
      }
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
