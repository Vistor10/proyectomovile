import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicebdService } from 'src/app/services/servicebd.service'; // Importar el servicio

@Component({
  selector: 'app-gabinetes',
  templateUrl: './gabinetes.page.html',
  styleUrls: ['./gabinetes.page.scss'],
})
export class GabinetesPage {
  searchTerm: string = '';

  constructor(private router: Router, private servicebd: ServicebdService) { }

  onSearchInput(event: any) {
    // Extrae el valor del campo de búsqueda
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    // Limpia el término de búsqueda
    this.searchTerm = '';
  }

  ngOnInit() {
    // Redirige si el término de búsqueda es "gabinetes"
    if (this.searchTerm.toLowerCase() === 'gabinetes') {
      this.router.navigate(['/gabinetes']);
    }
  }

  // Método para añadir producto al carrito
  addToCart(nombreproducto: string, precio: number, imagen: string) {
    const product = {
      nombreproducto,
      precio,
      imagen
    };
    this.servicebd.addToCart(product).then(() => {
      alert('Producto añadido al carrito');
    }).catch((error) => {
      console.error('Error al añadir producto al carrito', error);
    });
  }
}
