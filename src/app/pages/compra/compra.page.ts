import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { ServicebdService } from 'src/app/services/servicebd.service';  // Importa el servicio de la base de datos

@Component({
  selector: 'app-compra',
  templateUrl: './compra.page.html',
  styleUrls: ['./compra.page.scss'],
})
export class CompraPage implements OnInit {
  recipientName: string = '';  // Nombre del destinatario
  address: string = '';  // Dirección
  city: string = '';  // Ciudad
  correo: string = '';  // Correo electrónico
  direccionConfirmada: boolean = false;  // Indica si la dirección ha sido confirmada

  constructor(
    private navCtrl: NavController, 
    private toastController: ToastController,
    private servicebd: ServicebdService  // Inyecta el servicio de la base de datos
  ) { }

  ngOnInit() {
    // Cargar el correo del usuario autenticado desde localStorage
    this.correo = localStorage.getItem('correoUsuario') || '';
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const lat = coordinates.coords.latitude;
      const lon = coordinates.coords.longitude;

      console.log('Coordenadas obtenidas:', lat, lon);

      // Prellenar el campo de dirección con las coordenadas
      this.address = `Lat: ${lat.toFixed(6)}, Lon: ${lon.toFixed(6)}`;
      this.direccionConfirmada = true;  // La dirección ha sido confirmada

      const toast = await this.toastController.create({
        message: 'Dirección confirmada correctamente.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();

    } catch (error) {
      console.error('Error obteniendo la ubicación:', error);

      const toast = await this.toastController.create({
        message: 'Error obteniendo la ubicación. Por favor, inténtalo de nuevo.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }

  async onSubmit() {
    if (this.direccionConfirmada) {
      try {
        // Finaliza la compra y actualiza el stock en la base de datos
        await this.servicebd.finalizePurchase(this.correo);

        const toast = await this.toastController.create({
          message: `Compra confirmada. Enviando a: ${this.address}, correo: ${this.correo}`,
          duration: 5000,
          position: 'bottom',
        });
        toast.present();

        // Redirige a la página de detalles de venta
        this.navCtrl.navigateRoot('/detalleventa');
      } catch (error) {
        console.error("Error al finalizar la compra:", error);
        
        const toast = await this.toastController.create({
          message: 'Hubo un error al procesar la compra. Por favor, inténtalo de nuevo.',
          duration: 3000,
          position: 'bottom',
        });
        toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, confirma tu dirección antes de continuar.',
        duration: 3000,
        position: 'bottom',
      });
      toast.present();
    }
  }
}
