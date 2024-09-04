import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-eliminarproducto',
  templateUrl: './eliminarproducto.page.html',
  styleUrls: ['./eliminarproducto.page.scss'],
})
export class EliminarproductoPage implements OnInit {
  productoSeleccionado: string = '';
  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
  async onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Producto eliminado:', this.productoSeleccionado);
      this.presentToast('Producto eliminado exitosamente.');
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.presentToast('Por favor, selecciona un producto para eliminar.');
    }
  }

}
