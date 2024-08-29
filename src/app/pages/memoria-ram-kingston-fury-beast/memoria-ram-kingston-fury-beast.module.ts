import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemoriaRamKingstonFuryBeastPageRoutingModule } from './memoria-ram-kingston-fury-beast-routing.module';

import { MemoriaRamKingstonFuryBeastPage } from './memoria-ram-kingston-fury-beast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRamKingstonFuryBeastPageRoutingModule
  ],
  declarations: [MemoriaRamKingstonFuryBeastPage]
})
export class MemoriaRamKingstonFuryBeastPageModule {}
