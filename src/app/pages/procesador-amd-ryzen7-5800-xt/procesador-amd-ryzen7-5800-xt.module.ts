import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProcesadorAMDRyzen75800XTPageRoutingModule } from './procesador-amd-ryzen7-5800-xt-routing.module';
import { ProcesadorAMDRyzen75800XTPage } from './procesador-amd-ryzen7-5800-xt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesadorAMDRyzen75800XTPageRoutingModule
  ],
  declarations: [ProcesadorAMDRyzen75800XTPage]
})
export class ProcesadorAMDRyzen75800XTPageModule {}
