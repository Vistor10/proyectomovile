import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperarcontrasena',
  templateUrl: './recuperarcontrasena.page.html',
  styleUrls: ['./recuperarcontrasena.page.scss'],
})
export class RecuperarcontrasenaPage implements OnInit {
  email: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  onForward() {
    console.log('Correo válido:', this.email);
    this.navCtrl.navigateRoot('/login');

  }

}
