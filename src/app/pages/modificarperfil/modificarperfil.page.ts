import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificarperfil',
  templateUrl: './modificarperfil.page.html',
  styleUrls: ['./modificarperfil.page.scss'],
})
export class ModificarperfilPage implements OnInit {
  newUsername: string = '';

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  onUpdateProfile() {
    if (this.newUsername.trim() !== '') {
      console.log('Perfil actualizado:', {
        username: this.newUsername
      });
      this.navCtrl.navigateRoot('/perfil');
    } else {
      console.log('El nombre de usuario no puede estar vacío.');
    }
  }
  }

