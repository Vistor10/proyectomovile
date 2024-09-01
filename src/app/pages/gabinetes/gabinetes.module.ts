import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GabinetesPageRoutingModule } from './gabinetes-routing.module';
import { GabinetesPage } from './gabinetes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabinetesPageRoutingModule
  ],
  declarations: [GabinetesPage]
})
export class GabinetesPageModule {}
