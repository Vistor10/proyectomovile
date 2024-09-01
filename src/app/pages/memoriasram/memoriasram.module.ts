import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MemoriasramPageRoutingModule } from './memoriasram-routing.module';
import { MemoriasramPage } from './memoriasram.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemoriasramPageRoutingModule
  ],
  declarations: [MemoriasramPage]
})
export class MemoriasramPageModule {}
