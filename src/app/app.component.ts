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
  constructor(private servicebdService: ServicebdService, private router: Router) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.servicebdService.createDatabase();
  }
  async irDetalleCategoria(cat: string){
    //buscar el id correspondiente a la categoria
   // this.bd.presentAlert("1","1");
    const user = await this.servicebdService.buscarCat(cat);
    this.idCategoria = user.id_categoria;
   // this.bd.presentAlert("2",this.idCategoria+"");
    this.servicebdService.getProductsByCategory(this.idCategoria);
    this.router.navigate(['/gabinetes']);
  }
}