import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.page.html',
  styleUrls: ['./modificarproducto.page.scss'],
})
export class ModificarproductoPage implements OnInit {
  productoSeleccionado: string = '';
  producto = {
  nombre: '',
  precio: null,
  categoria: '',
  imagen: ''
  };
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
      console.log('Producto modificado:', this.producto);
      this.presentToast('Cambios guardados exitosamente.');
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }

}
