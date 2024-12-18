import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';
import { NavController, ToastController } from '@ionic/angular';
import { Producto } from 'src/app/services/producto';
import { ServicebdService } from 'src/app/services/servicebd.service';
@Component({
  selector: 'app-agregarproducto',
  templateUrl: './agregarproducto.page.html',
  styleUrls: ['./agregarproducto.page.scss'],
})
export class AgregarproductoPage implements OnInit {
  nombre: string = "";
  descrip: string = "";
  precio: number = 0;
  idcat: number = 0;
  stock: number = 0;  // Nueva propiedad para el stock
  imagen: any;
  categorias: any[] = [];

  constructor(
    private navCtrl: NavController,
    private toastController: ToastController,
    private dbService: ServicebdService
  ) { }

  ngOnInit() {
    this.loadCategories();
  }

  async loadCategories() {
    try {
      this.categorias = await this.dbService.getCategories();
    } catch (error) {
      this.presentToast('Error al obtener categoría');
    }
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri  
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
      await this.dbService.addProduct(this.nombre, this.descrip, this.precio, this.idcat, this.stock, this.imagen);
      this.navCtrl.navigateRoot('/paginainicio');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}


