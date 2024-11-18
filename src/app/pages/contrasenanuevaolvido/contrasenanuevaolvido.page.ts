import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contrasenanuevaolvido',
  templateUrl: './contrasenanuevaolvido.page.html',
  styleUrls: ['./contrasenanuevaolvido.page.scss'],
})
export class ContrasenanuevaolvidoPage implements OnInit {
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async onChangePassword() {
    if (this.newPassword !== this.confirmPassword) {
      await this.presentAlert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    
    await this.presentAlert('Éxito', 'Contraseña cambiada correctamente.');
    this.navCtrl.navigateRoot('/login'); 
  }

  private async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}

