import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio
import { NavController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-gabinetes',
  templateUrl: './gabinetes.page.html',
  styleUrls: ['./gabinetes.page.scss'],
})
export class GabinetesPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar
  //17-10
  products: any;
  //17-10

  constructor(private servicebd: ServicebdService, private navCtrl: NavController, private toastController: ToastController) { }

  ngOnInit() {
    
    //17-10
    //this.servicebd.getProductsByCategory(1);
    //this.servicebd.loadProducts()
    this.servicebd.fetchProductos().subscribe((data) => {
     // this.servicebd.presentToast(data+"");
      this.products = data;
    });
    
    
  }   
  verDetalles(product: any) {
    // Navegar a la página de detalles y pasar el producto completo
    this.navCtrl.navigateForward('/fuentesdepoder', {
      state: { producto: product }  // Aquí pasamos el producto seleccionado
    });
  }
  //17-10


 //17-10
  addToCart(product: any) {
    // Utilizas directamente las propiedades del objeto product
    this.servicebd.addToCart(this.userId, product.id_producto, this.quantity).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
  //17-10
  
  convertBlobToUrl(blob: Blob): string {
    return URL.createObjectURL(blob);
  }

}
