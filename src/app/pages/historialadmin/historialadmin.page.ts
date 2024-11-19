import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-historialadmin',
  templateUrl: './historialadmin.page.html',
  styleUrls: ['./historialadmin.page.scss'],
})
export class HistorialadminPage implements OnInit {
  compras: any[] = []; // Almacena todas las compras

  constructor(private servicebd: ServicebdService) {}

  ngOnInit() {
    this.loadAllSalesHistory();
  }

  // Método para cargar todas las compras
  loadAllSalesHistory() {
    this.servicebd.loadAllSalesHistory().then((data) => {
      this.compras = data;
    }).catch((error) => {
      console.error('Error cargando el historial de compras:', error);
    });
  }
}
