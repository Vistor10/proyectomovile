import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FuenteDePoderSEASONICG12PageRoutingModule } from './fuente-de-poder-seasonic-g12-routing.module';
import { FuenteDePoderSEASONICG12Page } from './fuente-de-poder-seasonic-g12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuenteDePoderSEASONICG12PageRoutingModule
  ],
  declarations: [FuenteDePoderSEASONICG12Page]
})
export class FuenteDePoderSEASONICG12PageModule {}
