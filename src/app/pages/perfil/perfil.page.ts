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
    const takePicture =  async () =>{
      const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    this.imagen = image.webPath;
  
    // Can be set to the src of an image now

  };

}
}

