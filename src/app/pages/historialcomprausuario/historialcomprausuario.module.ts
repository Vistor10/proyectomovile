import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialcomprausuarioPageRoutingModule } from './historialcomprausuario-routing.module';

import { HistorialcomprausuarioPage } from './historialcomprausuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialcomprausuarioPageRoutingModule
  ],
  declarations: [HistorialcomprausuarioPage]
})
export class HistorialcomprausuarioPageModule {}
