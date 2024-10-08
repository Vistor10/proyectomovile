import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isAdmin: boolean = false;
  imagen: any;
  constructor() { }

  
  ngOnInit() {
    const adminStatus = localStorage.getItem('isAdmin');
    this.isAdmin = adminStatus === 'true';
  }
  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90, // Calidad de la imagen
      allowEditing: false, // No permitir edición
      resultType: CameraResultType.Uri, // Retornar la URI de la imagen
    });

    // Asignar la imagen al campo "imagen"
    this.imagen = image.webPath;
  };
}

