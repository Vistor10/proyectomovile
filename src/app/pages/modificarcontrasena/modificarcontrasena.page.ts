import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificarcontrasena',
  templateUrl: './modificarcontrasena.page.html',
  styleUrls: ['./modificarcontrasena.page.scss'],
})
export class ModificarcontrasenaPage implements OnInit {
  newPassword: string = '';   
  confirmPassword: string = '';    

  constructor(
    private navCtrl: NavController,
    private dbService: ServicebdService,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  passwordsMatch(): boolean {
    return this.newPassword === this.confirmPassword;
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async onUpdatePassword() {
    if (this.passwordsMatch()) {
      const username = localStorage.getItem('correoUsuario');
      if (username) {
        const passwordValid = this.validatePassword(this.newPassword);
        if (passwordValid) {
          try {
            await this.dbService.updatePassword(username, this.newPassword);
            console.log('Contraseña actualizada con éxito:', this.newPassword);
            this.presentToast('Contraseña actualizada correctamente.');
            this.navCtrl.navigateRoot('/paginainicio');
          } catch (error) {
            console.error('Error al actualizar la contraseña:', error);
            this.presentToast('Error al actualizar la contraseña. ' + JSON.stringify(error));
          }
        } else {
          console.error('La contraseña no cumple con los requisitos.');
          this.presentToast('La contraseña no cumple con los requisitos.');
        }
      } else {
        console.error('No se encontró el correo del usuario en localStorage.');
        this.presentToast('No se encontró el correo del usuario.');
      }
    } else {
      console.log('Las contraseñas no coinciden.');
      this.presentToast('Las contraseñas no coinciden.');
    }
  }
  
  validatePassword(password: string): boolean {
    // Regex actualizado para permitir también . y #
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&.])[A-Za-z\d#$@$!%*?&.]{8,}$/;
    return regex.test(password);
  }
}
