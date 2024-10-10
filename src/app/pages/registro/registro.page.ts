import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

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

  constructor(
    private navCtrl: NavController, 
    private toastController: ToastController,
    private dbService: ServicebdService // Inyecta el servicio de base de datos
  ) {}

  ngOnInit() {}

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
      try {
        // Inserta el usuario en la base de datos (rol 'usuario' tiene id 2)
        await this.dbService.addUser(this.username, this.email, this.password, 2);

        console.log('Registro exitoso:', {
          username: this.username,
          email: this.email,
          password: this.password,
          rut: this.rut,
        });

        this.presentToast(`Registro exitoso.`);
        this.navCtrl.navigateRoot('/login');
      } catch (error) {
        console.error('Error registrando usuario', error);
        this.presentToast('Error al registrar usuario. Intenta nuevamente.');
      }
    } else {
      this.presentToast('Por favor, completa todos los campos correctamente.');
    }
  }
}
