import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gabinetes',
  templateUrl: './gabinetes.page.html',
  styleUrls: ['./gabinetes.page.scss'],
})
export class GabinetesPage {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    // Extrae el valor del campo de búsqueda
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    // Limpia el término de búsqueda y redirige si es necesario
    this.searchTerm = '';
  }

  ngOnInit() {
    // Redirige si el término de búsqueda es "gabinetes"
    if (this.searchTerm.toLowerCase() === 'gabinetes') {
      this.router.navigate(['/gabinetes']);
    }
  }
}

