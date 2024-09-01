import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemoriaRamKingstonFuryRenegadePageRoutingModule } from './memoria-ram-kingston-fury-renegade-routing.module';
import { MemoriaRamKingstonFuryRenegadePage } from './memoria-ram-kingston-fury-renegade.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRamKingstonFuryRenegadePageRoutingModule
  ],
  declarations: [MemoriaRamKingstonFuryRenegadePage]
})
export class MemoriaRamKingstonFuryRenegadePageModule {}
