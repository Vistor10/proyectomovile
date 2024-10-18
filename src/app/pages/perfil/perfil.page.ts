import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isAdmin: boolean = false;
  imagen: any;
  usuario: any = {
    nombre_usuario: '',
    correo: '',
    rol: ''
  };

  constructor(private serviceBD: ServicebdService) {}

  ngOnInit() {
    const adminStatus = localStorage.getItem('isAdmin');
    this.isAdmin = adminStatus === 'true';

    const correoUsuario = localStorage.getItem('correoUsuario');
    
    if (correoUsuario) {
      this.obtenerDatosUsuario(correoUsuario);
    } else {
      console.error('No se encontró un correo en localStorage');
    }

    // Suscribirse a los cambios del usuario
    this.serviceBD.getCurrentUserObservable().subscribe((user) => {
      if (user) {
        this.usuario = user;
        console.log('Datos del usuario actual:', user);
      } else {
        console.error('No se ha encontrado el usuario en la base de datos.');
      }
    });
  }

  obtenerDatosUsuario(correo: string) {
    this.serviceBD.getCurrentUser(correo);
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
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
