import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-modificarcategorias',
  templateUrl: './modificarcategorias.page.html',
  styleUrls: ['./modificarcategorias.page.scss'],
})
export class ModificarcategoriasPage implements OnInit {
  categorias: any[] = []; // Lista de categorías
  categoriaSeleccionada: any = null; // Categoría seleccionada para modificar

  constructor(private dbService: ServicebdService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.cargarCategorias();
  }
  // Cargar categorías existentes desde el servicio
  async cargarCategorias() {
    try {
      this.categorias = await this.dbService.getCategories();
    } catch (error) {
      this.presentToast('Error al cargar categorías: ' + JSON.stringify(error));
    }
  }

  // Seleccionar una categoría
  onCategoriaSelect() {
    if (this.categoriaSeleccionada) {
      console.log('Categoría seleccionada:', this.categoriaSeleccionada);
    }
  }

  // Cambiar la imagen de la categoría
  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, // Obtener la URL de la imagen
      });
      if (image.webPath) {
        this.categoriaSeleccionada.imagen = image.webPath;
      }
    } catch (error) {
      this.presentToast('Error al tomar la foto: ' + error);
    }
  }

  // Guardar los cambios realizados
  async guardarCambios() {
    if (this.categoriaSeleccionada) {
      try {
        await this.dbService.modificarCategoria(
          this.categoriaSeleccionada.id_categoria,
          this.categoriaSeleccionada.nombre_categoria,
          this.categoriaSeleccionada.imagen
        );
        this.presentToast('Categoría modificada exitosamente.');
  
        // Redirigir a la página de inicio para refrescar la vista
        this.router.navigate(['/paginainicio']).then(() => {
          window.location.reload(); // Forzar el recargado completo de la página
        });
      } catch (error) {
        this.presentToast('Error al guardar los cambios: ' + JSON.stringify(error));
      }
    } else {
      this.presentToast('Por favor selecciona una categoría.');
    }
  }
  

  // Mostrar un mensaje
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}


