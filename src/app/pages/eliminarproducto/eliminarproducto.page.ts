import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController, AlertController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.page.html',
  styleUrls: ['./eliminarproducto.page.scss'],
})
export class EliminarproductoPage implements OnInit {

  productos: any[] = [];
  idProductoSeleccionado: number = 0;
  constructor(private dbService: ServicebdService,private alertController: AlertController,private toastController: ToastController,private navCtrl: NavController) { }

  ngOnInit() {
    this.loadProducts();
  }
  
  async loadProducts() {
    try {
      this.productos = await this.dbService.getAllProducts();
    } catch (error) {
      this.presentToast('Error al cargar productos');
    }
  }
  async eliminarProducto() {
    if (this.idProductoSeleccionado === 0) {
      this.presentToast('Por favor selecciona un producto.');
      return;
    }
  
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Eliminación cancelada');
          }
        },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              await this.dbService.eliminarProducto(this.idProductoSeleccionado);  
              this.presentToast('Producto eliminado correctamente');
              
              
              this.navCtrl.navigateRoot('/paginainicio').then(() => {
                window.location.reload();  
              });
            } catch (error) {
              this.presentToast('Error al eliminar el producto');
            }
          }
        }
      ]
    });
  
    await alert.present();
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
