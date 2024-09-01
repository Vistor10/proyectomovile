import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  newUsername: string = '';
  newEmail: string = '';
  newPassword: string = '';
  confirmNewPassword: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  passwordsMatch(): boolean {
    return this.newPassword === this.confirmNewPassword;
  }

  onUpdateProfile() {
    if (this.passwordsMatch() && this.newPassword.length >= 8) {
      console.log('Perfil actualizado:', {
        username: this.newUsername,
        email: this.newEmail,
        password: this.newPassword,
      });
      this.navCtrl.navigateRoot('/perfil');
    } else {
      console.log('Las contraseñas no coinciden o no cumplen con los requisitos.');
    }
  }
}
