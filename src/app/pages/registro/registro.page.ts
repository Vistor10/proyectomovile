import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }
  onRegister() {
    if (this.username && this.email && this.passwordsMatch()) {
      console.log('Registro exitoso:', {
        username: this.username,
        email: this.email,
        password: this.password,
      });

      this.navCtrl.navigateRoot('/paginainicio');
    }
  }
}
