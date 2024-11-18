import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregarcategoria',
  templateUrl: './agregarcategoria.page.html',
  styleUrls: ['./agregarcategoria.page.scss'],
})
export class AgregarcategoriaPage implements OnInit {
  nombre: string = '';
  imagen: any;

  constructor(private navCtrl: NavController, private toastController: ToastController, private dbService: ServicebdService) { }

  ngOnInit() {
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
    });

    this.imagen = image.webPath; 
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

  async onSubmit(form: NgForm) {
    if (form.valid && this.imagen) {
      try {
        await this.dbService.addCategory(this.nombre, this.imagen);
        this.presentToast('Categoría agregada exitosamente.');
        this.navCtrl.navigateRoot('/perfil'); 
      } catch (error) {
        this.presentToast('Error al agregar la categoría.');
      }
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}


