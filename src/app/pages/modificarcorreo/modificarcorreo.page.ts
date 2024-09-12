import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modificarcorreo',
  templateUrl: './modificarcorreo.page.html',
  styleUrls: ['./modificarcorreo.page.scss'],
})
export class ModificarcorreoPage implements OnInit {
  newEmail: string = '';
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  onUpdateEmail() {
    if (this.newEmail.trim() !== '' && this.newEmail.includes('@')) {
      console.log('Correo actualizado:', this.newEmail);
      this.navCtrl.navigateRoot('/perfil'); 
    } else {
      console.log('Error en el correo.');
    }
  }
}
