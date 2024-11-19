import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificarcontrasena',
  templateUrl: './modificarcontrasena.page.html',
  styleUrls: ['./modificarcontrasena.page.scss'],
})
export class ModificarcontrasenaPage implements OnInit {
  currentPassword: string = '';  // Contraseña actual
  newPassword: string = '';     // Nueva contraseña
  confirmPassword: string = ''; // Confirmar contraseña nueva

  constructor(
    private navCtrl: NavController,
    private dbService: ServicebdService,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

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
    const email = localStorage.getItem('correoUsuario'); // Obtener correo del usuario logueado

    if (!email) {
      this.presentToast('No se encontró información del usuario en localStorage.');
      return;
    }

    try {
      // Obtener el usuario autenticado desde la base de datos
      const user = await this.dbService.getCurrentUser(email);

      if (!user) {
        this.presentToast('Usuario no encontrado.');
        return;
      }

      // Validar que la contraseña actual ingresada coincida con la almacenada
      if (user.contraseña !== this.currentPassword) {
        this.presentToast('La contraseña actual no es correcta.');
        return;
      }

      // Validar que las nuevas contraseñas coincidan
      if (!this.passwordsMatch()) {
        this.presentToast('Las contraseñas no coinciden.');
        return;
      }

      // Validar requisitos de la nueva contraseña
      const passwordValid = this.validatePassword(this.newPassword);
      if (!passwordValid) {
        this.presentToast('La nueva contraseña debe tener al menos 8 caracteres, una letra mayúscula, un número y un carácter especial.');
        return;
      }

      // Actualizar la contraseña en la base de datos
      await this.dbService.updatePassword(email, this.newPassword);

      this.presentToast('Contraseña actualizada correctamente.');
      this.navCtrl.navigateRoot('/paginainicio');
    } catch (error) {
      console.error('Error al actualizar la contraseña:', error);
      this.presentToast('Error al actualizar la contraseña. Intenta nuevamente.');
    }
  }

  validatePassword(password: string): boolean {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[#.@$!%*?&])[A-Za-z\d#.@$!%*?&]{8,}$/;
    return regex.test(password);
  }
}
