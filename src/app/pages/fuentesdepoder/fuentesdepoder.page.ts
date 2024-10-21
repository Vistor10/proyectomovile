import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-fuentesdepoder',
  templateUrl: './fuentesdepoder.page.html',
  styleUrls: ['./fuentesdepoder.page.scss'],
})
export class FuentesdepoderPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar
  product: any;
  constructor(private servicebd: ServicebdService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.product = this.router.getCurrentNavigation()?.extras?.state?.['producto'];

    if (!this.product) {
      console.error('No se encontró el estado con el producto.');
  }
}
  
  

  // Método para añadir producto al carrito
  addToCart(product: any) {
    // Utilizas directamente las propiedades del objeto product
    this.servicebd.addToCart(this.userId, product.id_producto, this.quantity,).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}

