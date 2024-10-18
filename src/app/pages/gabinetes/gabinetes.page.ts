import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

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

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
    //17-10
    //this.servicebd.getProductsByCategory(1);
    //this.servicebd.loadProducts()
    this.servicebd.fetchProductos().subscribe((data) => {
     // this.servicebd.presentToast(data+"");
      this.products = data;
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

  // Método auxiliar para obtener el ID del producto según el nombre
  getProductIdByName(nombre: string): number {
    const productMap: { [key: string]: number } = {
      'Gabinete Corsair iCue 4000X': 5, // Reemplaza con el ID real del producto
      'Gabinete Kolink Void RGB': 6,    // Reemplaza con el ID real del producto
      'Gabinete Aerocool Shard': 7, // Reemplaza con el ID real del producto
      'Gabinete Cooler Master CMP 520': 8  // Reemplaza con el ID real del producto
    };
    return productMap[nombre] || 0; // Retorna 0 si no se encuentra el producto
  }
}
