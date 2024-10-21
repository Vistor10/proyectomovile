import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  newUsername: string = '';

  constructor(
    private navCtrl: NavController,
    private dbService: ServicebdService, // Inyectar el servicio aquí
    private toastController: ToastController // Inyectar ToastController
  ) { }

  ngOnInit() { }

  async onUpdateProfile() {
    if (this.newUsername.trim() !== '') {
      const username = localStorage.getItem('correoUsuario'); // O cualquier identificador único del usuario
      if (username) {
        try {
          await this.dbService.updateUsername(username, this.newUsername); // Actualizar el nombre de usuario
          console.log('Perfil actualizado:', { username: this.newUsername });
          this.presentToast('Perfil actualizado correctamente.'); // Mensaje de éxito
          this.navCtrl.navigateRoot('/paginainicio'); // Redirigir a la página del perfil
        } catch (error) {
          console.error('Error al actualizar el perfil:', error);
          this.presentToast('Error al actualizar el perfil: ' + JSON.stringify(error)); // Mostrar el error
        }
      } else {
        console.error('No se encontró el correo del usuario en localStorage.');
        this.presentToast('No se encontró el correo del usuario.'); // Mensaje de error
      }
    } else {
      console.log('El nombre de usuario no puede estar vacío.');
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
