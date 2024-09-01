import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

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

  async onLogin() {
    if (this.username && this.password) {
      console.log('Inicio de sesión con:', {
        username: this.username,
        password: this.password,
      });
      this.presentToast('Inicio de sesión exitoso');

      this.navCtrl.navigateRoot('/paginainicio');
  } else {
    this.presentToast('Por favor, ingresa todos los campos');
}
}
}
