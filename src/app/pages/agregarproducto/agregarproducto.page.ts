import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {
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
      console.log('Producto agregado:', this.producto);
      this.presentToast('Producto agregado exitosamente.');
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}
