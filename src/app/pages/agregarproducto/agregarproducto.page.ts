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
  imagen: any;
  //17-10
  categorias: any[] = [];
  //17-10
  constructor(private navCtrl: NavController, private toastController: ToastController, private dbService: ServicebdService) { }

  ngOnInit() {
    //17-10
    this.loadCategories();
    //this.dbService.getProductsByCategory(1);
    //17-10
    
  }
  //17-10
  async loadCategories() {
    try {
      this.categorias = await this.dbService.getCategories(); // Obtener categorías desde el servicio
    } catch (error) {
      this.presentToast('Error al obtener categoria:');
    }
  }
  //17-10
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri  
    });

    
      this.imagen = image.webPath; // Guardar la imagen en el producto
    
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
   // this.presentToast("4");
    if (form.valid && this.imagen) {
     // this.presentToast("3");
      this.dbService.addProduct(this.nombre,this.descrip,this.precio,this.idcat,this.imagen);
      this.navCtrl.navigateRoot('/paginainicio');
    } else {
      this.presentToast('Por favor, completa el formulario correctamente.');
    }
  }
}

