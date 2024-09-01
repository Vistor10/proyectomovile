import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TecladoGamerRazerBlackwidowPageRoutingModule } from './teclado-gamer-razer-blackwidow-routing.module';
import { TecladoGamerRazerBlackwidowPage } from './teclado-gamer-razer-blackwidow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladoGamerRazerBlackwidowPageRoutingModule
  ],
  declarations: [TecladoGamerRazerBlackwidowPage]
})
export class TecladoGamerRazerBlackwidowPageModule {}
