import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacasmadrePageRoutingModule } from './placasmadre-routing.module';

import { PlacasmadrePage } from './placasmadre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacasmadrePageRoutingModule
  ],
  declarations: [PlacasmadrePage]
})
export class PlacasmadrePageModule {}
