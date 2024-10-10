import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
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
  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;

      console.log('Coordenadas obtenidas:', lat, lon);

      // Prellenar el campo de dirección con las coordenadas
      this.address = `Lat: ${lat.toFixed(6)}, Lon: ${lon.toFixed(6)}`;
    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);

      // Mostrar mensaje de error si la geolocalización falla
      const toast = await this.toastController.create({
        message: 'Error obteniendo la ubicación. Por favor, inténtalo de nuevo.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
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

