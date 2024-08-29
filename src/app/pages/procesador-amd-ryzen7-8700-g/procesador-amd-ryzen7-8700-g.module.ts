import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesadorAMDRyzen78700GPageRoutingModule } from './procesador-amd-ryzen7-8700-g-routing.module';

import { ProcesadorAMDRyzen78700GPage } from './procesador-amd-ryzen7-8700-g.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesadorAMDRyzen78700GPageRoutingModule
  ],
  declarations: [ProcesadorAMDRyzen78700GPage]
})
export class ProcesadorAMDRyzen78700GPageModule {}
