import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, MenuController } from '@ionic/angular'; // Importar MenuController
import { NgForm } from '@angular/forms';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';
  isAdmin: boolean = false;

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private dbService: ServicebdService, 
    private menuCtrl: MenuController 
  ) {}

  ngOnInit() {
    // Desactivar el menú cuando se entra a la página de login
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    // Volver a activar el menú cuando el usuario salga de esta página
    this.menuCtrl.enable(true);
  }

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
      try {
        // Validar el usuario con la base de datos usando el nombre de usuario
        const user = await this.dbService.validarUsuario(this.username, this.password);
  
        if (user) {
          this.isAdmin = user.id_rol === 1;
  
          // Guarda en localStorage si el usuario es admin
          localStorage.setItem('isAdmin', this.isAdmin.toString());
  
          // Guarda el userId y el correo en localStorage
          localStorage.setItem('userId', user.id_usuario.toString());
          localStorage.setItem('correoUsuario', user.correo);
  
          this.presentToast(`Inicio de sesión exitoso. Bienvenido, ${this.username}!`);
          this.navCtrl.navigateRoot('/paginainicio');
        } else {
          this.presentToast('Credenciales incorrectas. Por favor, intenta de nuevo.');
        }
      } catch (error) {
        console.error('Error en el inicio de sesión', error);
        this.presentToast('Error al iniciar sesión. Intenta nuevamente.');
      }
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}  
