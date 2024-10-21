import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificarcorreo',
  templateUrl: './modificarcorreo.page.html',
  styleUrls: ['./modificarcorreo.page.scss'],
})
export class ModificarcorreoPage implements OnInit {
  newEmail: string = '';

  constructor(
    private navCtrl: NavController,
    private dbService: ServicebdService, // Inyectar el servicio de base de datos
    private toastController: ToastController // Inyectar ToastController para mostrar mensajes
  ) { }

  ngOnInit() { }

  async onUpdateEmail() {
    if (this.newEmail.trim() !== '' && this.newEmail.includes('@')) {
      const currentEmail = localStorage.getItem('correoUsuario'); // Obtener el correo actual del usuario

      if (currentEmail) {
        try {
          // Llamar al servicio para actualizar el correo electrónico en la base de datos
          await this.dbService.updateEmail(currentEmail, this.newEmail);
          console.log('Correo actualizado:', this.newEmail);
          this.presentToast('Correo actualizado correctamente.');
          this.navCtrl.navigateRoot('/paginainicio'); // Redirigir al perfil
        } catch (error) {
          console.error('Error al actualizar el correo:', error);
          this.presentToast('Error al actualizar el correo: ' + JSON.stringify(error)); // Mostrar el error
        }
      } else {
        console.error('No se encontró el correo del usuario en localStorage.');
        this.presentToast('No se encontró el correo del usuario.'); // Mostrar mensaje de error
      }
    } else {
      console.log('Error en el correo.');
      this.presentToast('Por favor, ingresa un correo válido.'); // Mostrar error si el correo es inválido
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
