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
  isAdmin: boolean = false;

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
      if (this.username === 'admin') {
        this.isAdmin = true; 
      } else {
        this.isAdmin = false; 
      }
      localStorage.setItem('isAdmin', this.isAdmin.toString());
      this.presentToast(`Inicio de sesión exitoso. Bienvenido, ${this.username}!`);
      this.navCtrl.navigateRoot('/paginainicio');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}
