import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TecladoGamerLogitechG213PageRoutingModule } from './teclado-gamer-logitech-g213-routing.module';
import { TecladoGamerLogitechG213Page } from './teclado-gamer-logitech-g213.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladoGamerLogitechG213PageRoutingModule
  ],
  declarations: [TecladoGamerLogitechG213Page]
})
export class TecladoGamerLogitechG213PageModule {}
