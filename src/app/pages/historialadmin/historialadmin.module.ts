import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialadminPageRoutingModule } from './historialadmin-routing.module';

import { HistorialadminPage } from './historialadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialadminPageRoutingModule
  ],
  declarations: [HistorialadminPage]
})
export class HistorialadminPageModule {}
