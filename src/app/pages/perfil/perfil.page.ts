import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  isAdmin: boolean = false;
  constructor() { }

  ngOnInit() {
    const adminStatus = localStorage.getItem('isAdmin');
    this.isAdmin = adminStatus === 'true';
  }

}
