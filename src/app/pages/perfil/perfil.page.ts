import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private serviceBD: ServicebdService, private router: Router) {}

  ngOnInit() {
    const adminStatus = localStorage.getItem('isAdmin');
    this.isAdmin = adminStatus === 'true';
  
    if (this.isAdmin) {
      this.usuario.nombre_usuario = 'Admin';
      this.usuario.correo = 'admin@gmail.com';
      this.cargarImagenPerfil(this.usuario.correo); // Cargar imagen para Admin
    } else {
      const correoUsuario = localStorage.getItem('correoUsuario');
      if (correoUsuario) {
        this.obtenerDatosUsuario(correoUsuario);
      } else {
        console.error('No se encontró un correo en localStorage');
        this.router.navigate(['/login']); // Redirigir al login si no hay correo
      }
    }
  }
  
  // Método para cargar la imagen de perfil
  cargarImagenPerfil(correo: string) {
    const storedImage = localStorage.getItem(`profileImage_${correo}`);
    if (storedImage) {
      this.imagen = storedImage;
    }
  }
  
  

  obtenerDatosUsuario(correo: string) {
    this.serviceBD.getCurrentUser(correo).then((user) => {
      if (user) {
        this.usuario = user;
        this.cargarImagenPerfil(user.correo); // Cargar la imagen específica del usuario
        console.log('Datos del usuario:', user);
      } else {
        console.error('No se encontró el usuario en la base de datos.');
      }
    }).catch(error => {
      console.error('Error al obtener los datos del usuario:', error);
    });
  }
  

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
    });
    
    if (image.dataUrl && this.usuario.correo) { // Asegúrate de que el usuario esté cargado
      this.imagen = image.dataUrl;
      localStorage.setItem(`profileImage_${this.usuario.correo}`, image.dataUrl); // Guardar la imagen con una clave única para cada usuario
    } else {
      console.error('No se pudo obtener la imagen correctamente o el usuario no está cargado.');
    }
  };
  
  

  cerrarSesion() {
    localStorage.removeItem('correoUsuario');
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/login']);
  }
}
