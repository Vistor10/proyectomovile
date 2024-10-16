import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.page.html',
  styleUrls: ['./modificarproducto.page.scss'],
})
export class ModificarproductoPage implements OnInit {
  productoSeleccionado: string = '';
  producto = {
  nombre: '',
  precio: null,
  categoria: '',
  imagen: ''
  };
  constructor(private navCtrl: NavController, private toastController: ToastController) { }

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
      console.log('Producto modificado:', this.producto);
      this.presentToast('Cambios guardados exitosamente.');
      this.navCtrl.navigateRoot('/perfil');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }

}
