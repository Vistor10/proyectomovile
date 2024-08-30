import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginainicio',
  templateUrl: './paginainicio.page.html',
  styleUrls: ['./paginainicio.page.scss'],
})
export class PaginainicioPage {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    this.searchTerm = '';
  }

  onSearchSubmit() {
    // Verifica si el término de búsqueda es "gabinetes" y redirige
    if (this.searchTerm.trim().toLowerCase() === 'gabinetes') {
      this.router.navigate(['/gabinetes']);
    }
  }
}
