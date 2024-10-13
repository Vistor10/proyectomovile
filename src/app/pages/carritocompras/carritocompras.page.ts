import { Component } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NavController } from '@ionic/angular'; // Importar NavController

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
        return ''

      default:
        return 'assets/images/default.jpg'; 
    }
  }

  addToCart(productId: number, quantity: number) {
    this.servicebd.addToCart(this.userId, productId, quantity)
      .then(() => this.loadCartItems())
      .catch(err => console.error('Error al anadir al carrito', err));
  }

  removeFromCart(productId: number) {
    this.servicebd.removeFromCart(this.userId, productId)
      .then(() => {
        alert('Producto eliminado del carrito');
        this.loadCartItems(); // Actualizar la lista de productos en el carrito
      })
      .catch(err => console.error('Error eliminando del carrito', err));
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.precio * item.cantidad, 0); // Multiplicar por la cantidad en caso de ser relevante
  }

  // Método para redirigir a la página de datos de envío
  goToShippingPage() {
    this.navCtrl.navigateForward('compra'); // Reemplaza con la ruta correcta de tu página de envío
  }
}
