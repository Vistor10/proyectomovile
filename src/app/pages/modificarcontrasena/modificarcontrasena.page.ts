import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificarcontrasena',
  templateUrl: './modificarcontrasena.page.html',
  styleUrls: ['./modificarcontrasena.page.scss'],
})
export class ModificarcontrasenaPage implements OnInit {
  newPassword: string = '';   
  confirmPassword: string = '';    

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  passwordsMatch(): boolean {
    return this.newPassword === this.confirmPassword;
  }

  onUpdatePassword() {
    if (this.passwordsMatch()) {
      console.log('Contraseña actualizada con éxito:', this.newPassword);
      this.navCtrl.navigateRoot('/perfil');
    } else {
      console.log('Las contraseñas no coinciden.');
    }
  }
}