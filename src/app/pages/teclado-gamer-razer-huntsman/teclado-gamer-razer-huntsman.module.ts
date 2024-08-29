import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecladoGamerRazerHuntsmanPageRoutingModule } from './teclado-gamer-razer-huntsman-routing.module';

import { TecladoGamerRazerHuntsmanPage } from './teclado-gamer-razer-huntsman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladoGamerRazerHuntsmanPageRoutingModule
  ],
  declarations: [TecladoGamerRazerHuntsmanPage]
})
export class TecladoGamerRazerHuntsmanPageModule {}
