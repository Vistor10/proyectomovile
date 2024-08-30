import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {

  }

  onLogin() {
    if (this.username && this.password) {
      console.log('Inicio de sesión con:', {
        username: this.username,
        password: this.password,
      });

      this.navCtrl.navigateRoot('/paginainicio');
  }
}
}
