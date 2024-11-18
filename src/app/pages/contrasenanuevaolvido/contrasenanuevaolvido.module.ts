import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContrasenanuevaolvidoPageRoutingModule } from './contrasenanuevaolvido-routing.module';

import { ContrasenanuevaolvidoPage } from './contrasenanuevaolvido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContrasenanuevaolvidoPageRoutingModule
  ],
  declarations: [ContrasenanuevaolvidoPage]
})
export class ContrasenanuevaolvidoPageModule {}
