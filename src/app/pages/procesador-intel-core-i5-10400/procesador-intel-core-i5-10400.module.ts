import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProcesadorIntelCoreI510400PageRoutingModule } from './procesador-intel-core-i5-10400-routing.module';
import { ProcesadorIntelCoreI510400Page } from './procesador-intel-core-i5-10400.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesadorIntelCoreI510400PageRoutingModule
  ],
  declarations: [ProcesadorIntelCoreI510400Page]
})
export class ProcesadorIntelCoreI510400PageModule {}
