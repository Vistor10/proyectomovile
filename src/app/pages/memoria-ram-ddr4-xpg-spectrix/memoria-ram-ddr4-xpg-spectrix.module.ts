import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemoriaRamDdr4XPGSPECTRIXPageRoutingModule } from './memoria-ram-ddr4-xpg-spectrix-routing.module';
import { MemoriaRamDdr4XPGSPECTRIXPage } from './memoria-ram-ddr4-xpg-spectrix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRamDdr4XPGSPECTRIXPageRoutingModule
  ],
  declarations: [MemoriaRamDdr4XPGSPECTRIXPage]
})
export class MemoriaRamDdr4XPGSPECTRIXPageModule {}
