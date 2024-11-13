import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-gabinetes',
  templateUrl: './gabinetes.page.html',
  styleUrls: ['./gabinetes.page.scss'],
})
export class GabinetesPage implements OnInit {
  userEmail: string | null = null;
  quantity: number = 1;
  products: any;

  constructor(
    private servicebd: ServicebdService,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.userEmail = localStorage.getItem('correoUsuario');

    if (!this.userEmail) {
      console.error('Correo del usuario no encontrado en localStorage o el usuario no está autenticado');
      return;
    }

    this.servicebd.fetchProductos().subscribe((data) => {
      this.products = data;
    });
  }

  verDetalles(product: any) {
    this.navCtrl.navigateForward('/fuentesdepoder', {
      state: { producto: product }
    });
  }

  async addToCart(product: any) {
    if (this.userEmail) {
      const cantidadTotalDeseada = this.quantity + (product.cantidadEnCarrito || 0);
      
      if (cantidadTotalDeseada > product.stock) {
        // Muestra una alerta si la cantidad excede el stock
        const toast = await this.toastController.create({
          message: `Productos sobrepasan el stock.`,
          duration: 3000,
          color: 'primary'  // Cambiado a color azul (primary)
        });
        await toast.present();
      } else {
        try {
          // Añade el producto al carrito
          await this.servicebd.addToCart(this.userEmail, product.id_producto, this.quantity);
          
          // Muestra una confirmación de que el producto fue añadido al carrito
          const toast = await this.toastController.create({
            message: 'Producto añadido al carrito',
            duration: 2000,
            color: 'primary'  // Cambiado a color azul (primary)
          });
          await toast.present();
          
          // Actualiza el stock restante del producto en la interfaz
          product.stock -= this.quantity;
          
        } catch (error) {
          console.error('Error al añadir producto al carrito', error);
        }
      }
    }
  }

  convertBlobToUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }
}
