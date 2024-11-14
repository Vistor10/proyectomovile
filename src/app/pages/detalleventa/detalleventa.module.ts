import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleventaPageRoutingModule } from './detalleventa-routing.module';

import { DetalleventaPage } from './detalleventa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleventaPageRoutingModule
  ],
  declarations: [DetalleventaPage]
})
export class DetalleventaPageModule {}
