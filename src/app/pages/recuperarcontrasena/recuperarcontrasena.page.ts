import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  email: string = '';
  tokenGenerado: string = '';
  tokenEnviado: boolean = false;
  inputToken: string = '';

  constructor(private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async onForward() {
    if (!this.email) {
      await this.presentAlert('Error', 'Por favor, ingresa un correo válido.');
      return;
    }

    this.tokenGenerado = this.generarToken(); 

    
    const emailParams = {
      user_email: this.email,
      user_token: this.tokenGenerado,
    };
   
    emailjs
      .send(
        'service_xm426k4', 
        'template_y3p5r5x', 
        emailParams,
        '9Fad4QCcAWVznT_ZX' 
      )
      .then(
        async (response: EmailJSResponseStatus) => {
          this.tokenEnviado = true;
          await this.presentAlert(
            'Código Enviado',
            'Hemos enviado un código de verificación a tu correo.'
          );
        },
        async (error) => {
          console.error('Error al enviar el correo:', error);
          await this.presentAlert('Error', 'No se pudo enviar el correo.');
        }
      );
  }
   
   async onVerify() {
    if (this.inputToken === this.tokenGenerado) {
      await this.presentAlert('Éxito', 'El código es correcto. Redirigiendo...');
      
      
      this.navCtrl.navigateForward('/contrasenanueva');
    } else {
      await this.presentAlert('Error', 'El código ingresado es incorrecto.');
    }
  }

  
  private generarToken(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
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
  
