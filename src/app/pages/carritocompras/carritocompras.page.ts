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
  userId: number = 2; // userId del usuario autenticado

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController // Inyectar NavController en el constructor
  ) { }

  ionViewWillEnter() {
    this.loadCartItems();
  }

  // Modificar la función loadCartItems para asignar las imágenes
  async loadCartItems() {
    try {
      this.cartItems = await this.servicebd.getCartItems(this.userId);

      // Asignar manualmente la URL de la imagen según el id_producto
      this.cartItems.forEach(item => {
        item.imagen = this.getProductImage(item.id_producto); // Asignar imagen
      });

      console.log('imagen cargada:', this.cartItems);
    } catch (error) {
      console.error('Error al cargar la imagen', error);
    }
  }

  // Método para obtener la URL de la imagen según el id_producto
  getProductImage(id_producto: number): string {
    switch (id_producto) {
      case 1:
        return 'https://media.spdigital.cl/thumbnails/products/snyhppat_a721dfd4_thumbnail_512.jpg';
      case 2:
        return 'https://media.spdigital.cl/thumbnails/products/3r2pwux4_8665678f_thumbnail_512.jpg'; 
      case 3:
        return 'https://media.spdigital.cl/thumbnails/products/zwy4s9lw_57966fd8_thumbnail_512.png';
      case 4:
        return 'https://media.spdigital.cl/thumbnails/products/ppwci9lq_50a0c365_thumbnail_512.jpg';
      case 5:
        return 'https://media.spdigital.cl/thumbnails/products/88txvj8i_200d227b_thumbnail_512.png';
      case 6:
        return '';
      default:
        return 'assets/images/default.jpg'; 
    }
  }

  addToCart(productId: number) {
    const existingItem = this.cartItems.find(item => item.id_producto === productId);
    
    if (existingItem) {
      // Si el producto ya está en el carrito, aumentamos la cantidad
      existingItem.cantidad += 1;
      this.servicebd.updateCartItem(this.userId, productId, existingItem.cantidad)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    } else {
      // Si el producto no está en el carrito, lo agregamos
      this.servicebd.addToCart(this.userId, productId, 1)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al añadir al carrito', err));
    }
  }
  
  // Método para aumentar la cantidad
  increaseQuantity(item: any) {
    item.cantidad += 1;
    this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad)
      .then(() => this.loadCartItems())
      .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
  }
  
  // Método para disminuir la cantidad
  decreaseQuantity(item: any) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.servicebd.updateCartItem(this.userId, item.id_producto, item.cantidad)
        .then(() => this.loadCartItems())
        .catch(err => console.error('Error al actualizar la cantidad en el carrito', err));
    }
  }

  // Método para eliminar un producto del carrito
  async removeFromCart(productId: number) {
    await this.servicebd.removeFromCart(this.userId, productId);
    this.loadCartItems(); // Recarga los items del carrito después de eliminar
  }

  // Método para calcular el total del carrito
  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  }

  // Método para ir a la página de envío 
  goTocomprapage() {
    console.log('Navegando a la página de envío...');
    this.navCtrl.navigateForward('/compra'); 
  }
}
