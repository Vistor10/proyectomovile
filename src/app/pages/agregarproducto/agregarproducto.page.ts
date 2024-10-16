import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController, ToastController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service';
@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {
  producto = {
    nombre: '',
    precio: null,
    categoria: '',
    imagen: ''
  };
  constructor(private navCtrl: NavController, private toastController: ToastController, private dbService: ServicebdService) { }

  ngOnInit() {
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,  // Obtener imagen como base64
    });

    if (image.dataUrl) {
      this.producto.imagen = image.dataUrl; // Guardar la imagen en el producto
    } else {
      this.presentToast('No se pudo obtener la imagen.');
    }
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
    if (form.valid && this.producto.imagen) {
      console.log('Producto agregado:', this.producto);
      this.presentToast('Producto agregado exitosamente.');
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}
