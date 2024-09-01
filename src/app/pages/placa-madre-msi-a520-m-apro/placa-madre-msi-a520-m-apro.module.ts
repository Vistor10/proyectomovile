import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlacaMadreMSIA520MAPROPageRoutingModule } from './placa-madre-msi-a520-m-apro-routing.module';
import { PlacaMadreMSIA520MAPROPage } from './placa-madre-msi-a520-m-apro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaMadreMSIA520MAPROPageRoutingModule
  ],
  declarations: [PlacaMadreMSIA520MAPROPage]
})
export class PlacaMadreMSIA520MAPROPageModule {}
