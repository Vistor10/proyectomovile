import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ServicebdService } from 'src/app/services/servicebd.service';
@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.page.html',
  styleUrls: ['./modificarproducto.page.scss'],
})
export class ModificarproductoPage implements OnInit {
  productos: any[] = []; // Aquí se almacenan todos los productos cargados de la base de datos
  categorias: any[] = []; // Aquí se almacenan las categorías
  idProductoSeleccionado: number = 0; // Para guardar el ID del producto seleccionado
  productoSeleccionado: any = {};

  nombre: string = '';
  descrip: string = '';
  precio: number = 0;
  idcat: number = 0;
  imagen: any;
  
  constructor(private navCtrl: NavController, private toastController: ToastController, private dbService: ServicebdService, private alertController: AlertController) { }

  ngOnInit() {
    this.loadCategories(); // Cargar las categorías
    this.loadProducts();
  }
  async loadCategories() {
    try {
      this.categorias = await this.dbService.getCategories();
      this.presentAlert('Categorías cargadas correctamente');
    } catch (error) {
      this.presentAlert('Error al cargar categorías');
    }
  }
  async loadProducts() {
    try {
      this.productos = await this.dbService.getAllProducts();
      this.presentAlert('Productos cargados correctamente');
    } catch (error) {
      this.presentAlert('Error al cargar productos');
    }
  }
  onProductSelect() {
    const productoSeleccionado = this.productos.find(prod => prod.id_producto === this.idProductoSeleccionado);
    if (productoSeleccionado) {
      // Llenar los campos del formulario con los valores del producto seleccionado
      this.nombre = productoSeleccionado.nombre_producto;
      this.descrip = productoSeleccionado.descripcion_producto;
      this.precio = productoSeleccionado.precio;
      this.idcat = productoSeleccionado.id_categoria;
      this.imagen = productoSeleccionado.imagen; // Puede ser un blob o webPath
    }
  }
  async onProductoChange(event: any) {
    const idProducto = event.detail.value; // Obtener el ID del producto seleccionado
    try {
      // Obtener detalles completos del producto por su ID
      this.productoSeleccionado = await this.dbService.getProductById(idProducto);
    } catch (error) {
      this.presentAlert('Error al cargar los detalles del producto');
    }
  }
  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl // Obtener la imagen como base64 o DataUrl
    });
  
    if (image) {
      this.imagen = image.dataUrl; // Actualiza la variable 'imagen' con la nueva imagen seleccionada
      this.presentAlert("Imagen actualizada correctamente.");
    } else {
      this.presentAlert("No se pudo obtener la imagen.");
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
    if (form.valid) {
        const imagenFinal = this.imagen || this.productoSeleccionado.imagen;

        try {
            await this.dbService.modificarProducto(
                this.idProductoSeleccionado,
                this.productoSeleccionado.nombre_producto,
                this.productoSeleccionado.descripcion_producto,
                this.productoSeleccionado.precio,
                this.productoSeleccionado.id_categoria,
                this.productoSeleccionado.stock, // Incluimos el stock en la modificación
                imagenFinal
            );
            this.presentToast('Producto modificado con éxito');
            this.navCtrl.navigateRoot('/paginainicio').then(() => {
                window.location.reload();
            });
        } catch (error) {
            this.presentToast('Error al modificar el producto');
        }
    } else {
        this.presentToast('Por favor, completa el formulario correctamente.');
    }
}
async eliminarProducto() {
  const alert = await this.alertController.create({
      header: 'Confirmar Eliminación',
      message: '¿Estás seguro de que deseas eliminar este producto?',
      buttons: [
          {
              text: 'Cancelar',
              role: 'cancel',
              cssClass: 'secondary',
          }, {
              text: 'Eliminar',
              handler: async () => {
                  try {
                      await this.dbService.eliminarProducto(this.idProductoSeleccionado);
                      this.presentToast('Producto eliminado con éxito');
                      this.navCtrl.navigateRoot('/paginainicio').then(() => {
                          window.location.reload();
                      });
                  } catch (error) {
                      this.presentToast('Error al eliminar el producto');
                  }
              }
          }
      ]
  });
  await alert.present();
}

  
  
  async presentAlert(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}
