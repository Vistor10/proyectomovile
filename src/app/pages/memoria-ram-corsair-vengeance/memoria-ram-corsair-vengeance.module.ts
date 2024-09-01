import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemoriaRamCorsairVengeancePageRoutingModule } from './memoria-ram-corsair-vengeance-routing.module';
import { MemoriaRamCorsairVengeancePage } from './memoria-ram-corsair-vengeance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriaRamCorsairVengeancePageRoutingModule
  ],
  declarations: [MemoriaRamCorsairVengeancePage]
})
export class MemoriaRamCorsairVengeancePageModule {}
