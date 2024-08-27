import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }
  passwordsMatch(): boolean {
    return this.password === this.confirmPassword;
  }

  onRegister() {
    if (this.passwordsMatch()) {
      console.log('Formulario de registro enviado', {
        username: this.username,
        email: this.email,
        password: this.password
      });
    } else {
      console.log('Las contraseñas no coinciden');
    }
  }
}
