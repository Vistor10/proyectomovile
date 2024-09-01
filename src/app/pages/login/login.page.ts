import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async onLogin(form: NgForm) {
    if (form.valid) {
      console.log('Inicio de sesión con:', {
        username: this.username,
        password: this.password,
      });
      this.presentToast('Inicio de sesión exitoso');
      this.navCtrl.navigateRoot('/paginainicio');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}
