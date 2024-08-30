// teclados.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teclados',
  templateUrl: './teclados.page.html',
  styleUrls: ['./teclados.page.scss'],
})
export class TecladosPage {
  searchTerm: string = '';

  constructor(private router: Router) {}

  onSearchInput(event: any) {
    this.searchTerm = event.target.value;
  }

  onSearchClear() {
    this.searchTerm = '';
  }

  ngOnInit() {
    if (this.searchTerm.toLowerCase() === 'teclados') {
      this.router.navigate(['/teclados']);
    }
  }
}