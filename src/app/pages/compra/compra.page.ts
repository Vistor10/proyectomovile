import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  recipientName: string = '';
  address: string = '';
  city: string = '';
  constructor(private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
  }
  async onSubmit() {
    const toast = await this.toastController.create({
      message: 'Compra confirmada. Enviando a: ' + this.address,
      duration: 5000,
      position: 'bottom',
    });
    toast.present();

    this.navCtrl.navigateRoot('/paginainicio'); 
  }
}

