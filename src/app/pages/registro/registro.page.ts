import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

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
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }
  async onRegister() {
    if (this.username && this.email && this.passwordsMatch()) {
      console.log('Registro exitoso:', {
        username: this.username,
        email: this.email,
        password: this.password,
      });
      this.presentToast(`Inicio de sesión exitoso. Bienvenido, ${this.username}!`);

      this.navCtrl.navigateRoot('/paginainicio');
    }
  }
}
