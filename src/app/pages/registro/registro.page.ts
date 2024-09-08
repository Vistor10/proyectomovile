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
  rut: string = '';

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
  isValidRUT(rut: string): boolean {
    const rutPattern = /^\d{7,8}-[\dkK]$/;
    return rutPattern.test(rut);
  }
  async onRegister() {
    if (this.username && this.email && this.passwordsMatch() && this.isValidRUT(this.rut)) {
      console.log('Registro exitoso:', {
        username: this.username,
        email: this.email,
        password: this.password,
        rut: this.rut,
      });
      this.presentToast(`Registro exitoso. Bienvenido, ${this.username}!`);

      this.navCtrl.navigateRoot('/paginainicio');
    }
  }
}
