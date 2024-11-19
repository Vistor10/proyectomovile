import { Component } from '@angular/core';
import { ServicebdService } from './services/servicebd.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  idCategoria: number = 0;
  categories: any[] = [];
  constructor(private servicebdService: ServicebdService, private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.servicebdService.createDatabase();
    await this.loadCategories(); 
  }
  
  async loadCategories() {
    try {
      this.categories = await this.servicebdService.getCategories();
    } catch (error) {
      console.error('Error al cargar las categorías:', error);
    }
  }
  
  async irDetalleCategoria(cat: string) {
    try {
      const category = await this.servicebdService.buscarCat(cat); 
      this.idCategoria = category.id_categoria;

      await this.servicebdService.getProductsByCategory(this.idCategoria); 
      this.router.navigate(['/gabinetes']); 
    } catch (error) {
      console.error('Error al redirigir a la categoría:', error);
    }
  }
}