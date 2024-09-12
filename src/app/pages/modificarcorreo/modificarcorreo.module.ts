import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcorreoPageRoutingModule } from './modificarcorreo-routing.module';

import { ModificarcorreoPage } from './modificarcorreo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarcorreoPageRoutingModule
  ],
  declarations: [ModificarcorreoPage]
})
export class ModificarcorreoPageModule {}
