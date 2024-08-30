import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procesadores',
  templateUrl: './procesadores.page.html',
  styleUrls: ['./procesadores.page.scss'],
})
export class ProcesadoresPage {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    this.searchTerm = '';
  }

  ngOnInit() {
    if (this.searchTerm.toLowerCase() === 'procesadores') {
      this.router.navigate(['/procesadores']);
    }
  }
}