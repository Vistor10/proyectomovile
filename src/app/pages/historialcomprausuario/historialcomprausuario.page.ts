import { Component, OnInit } from '@angular/core';
import { ServicebdService } from 'src/app/services/servicebd.service';

@Component({
  selector: 'app-historialcomprausuario',
  templateUrl: './historialcomprausuario.page.html',
  styleUrls: ['./historialcomprausuario.page.scss'],
})
export class HistorialcomprausuarioPage implements OnInit {
  compras: any[] = [];
  isAdmin: boolean = false;

  constructor(private servicebd: ServicebdService) {}

  ngOnInit() {
    // Verificar si el usuario es administrador
    const email = localStorage.getItem('correoUsuario');
    this.isAdmin = email === 'admin@gmail.com';

    if (this.isAdmin) {
      this.loadAllSalesHistory();
    } else {
      this.loadPurchaseHistory();
    }

    this.servicebd.historialCompras$.subscribe({
      next: (compras) => {
        this.compras = compras;
        console.log(this.compras);
      },
      error: (error) =>
        console.error('Error cargando el historial de compras:', error),
    });
  }

  loadPurchaseHistory() {
    const email = localStorage.getItem('correoUsuario'); // Obtener el correo del usuario autenticado
    if (email) {
      this.servicebd.loadDetailedPurchaseHistory(email); // Cargar el historial detallado por correo
    } else {
      console.error('Correo del usuario no encontrado en localStorage.');
    }
  }

  loadAllSalesHistory() {
    this.servicebd.loadAllSalesHistory(); // Cargar todas las ventas si es administrador
  }
}
