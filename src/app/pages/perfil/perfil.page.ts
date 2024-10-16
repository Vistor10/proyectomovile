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
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl, // Obtener la imagen en formato base64
    });
    if (image.dataUrl) {
      const imageBlob = await fetch(image.dataUrl).then(res => res.blob());
      console.log(imageBlob); 
      this.imagen = image.dataUrl;
    } else {
      console.error('No se pudo obtener la imagen correctamente.');
    }
  };
}

