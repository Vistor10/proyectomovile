import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Propiedades para enlazar con el formulario
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Puedes usar este método para inicializar cualquier lógica si es necesario
  }

  // Método que se llamará al enviar el formulario de login
  onLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      // Simulando un login exitoso
      alert('Inicio de sesión exitoso');
      this.navCtrl.navigateForward('/home'); // Navegar a la página de inicio
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}

