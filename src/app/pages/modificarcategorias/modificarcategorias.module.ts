import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarcategoriasPageRoutingModule } from './modificarcategorias-routing.module';

import { ModificarcategoriasPage } from './modificarcategorias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarcategoriasPageRoutingModule
  ],
  declarations: [ModificarcategoriasPage]
})
export class ModificarcategoriasPageModule {}
