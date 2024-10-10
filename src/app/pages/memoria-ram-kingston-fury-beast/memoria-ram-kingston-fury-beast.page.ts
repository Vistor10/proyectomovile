import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-memoria-ram-kingston-fury-beast',
  templateUrl: './memoria-ram-kingston-fury-beast.page.html',
  styleUrls: ['./memoria-ram-kingston-fury-beast.page.scss'],
})
export class MemoriaRamKingstonFuryBeastPage implements OnInit {

  userId: number = 2; // Asegúrate de obtener el ID del usuario autenticado
  quantity: number = 1; // Define la cantidad que deseas agregar

  // Define los detalles del producto
  id_producto: number = 23; // Reemplaza con el ID del producto real
  nombreproducto: string = 'Memoria Ram DDR4 Kingston FURY Beast'; // Nombre del producto
  precio: number = 99990; // Precio del producto
  imagen: string = 'https://media.spdigital.cl/thumbnails/products/_xiag1e3_7be5c2ae_thumbnail_512.jpg'; // Ruta de la imagen del producto

  constructor(private servicebd: ServicebdService) { }

  ngOnInit() {
  }

  // Método para añadir producto al carrito
  addToCart() {
    const product = {
      id_producto: this.id_producto,
      nombreproducto: this.nombreproducto,
      precio: this.precio,
      imagen: this.imagen
    };
    
    this.servicebd.addToCart(this.userId, product.id_producto, this.quantity).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
