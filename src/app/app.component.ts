import { Component } from '@angular/core';
import { ServicebdService } from './services/servicebd.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private servicebdService: ServicebdService) {
    this.initializeApp();
  }

  async initializeApp() {
    await this.servicebdService.createDatabase();
  }
}
