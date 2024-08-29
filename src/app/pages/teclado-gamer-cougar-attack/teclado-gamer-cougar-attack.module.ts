import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TecladoGamerCougarAttackPageRoutingModule } from './teclado-gamer-cougar-attack-routing.module';

import { TecladoGamerCougarAttackPage } from './teclado-gamer-cougar-attack.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TecladoGamerCougarAttackPageRoutingModule
  ],
  declarations: [TecladoGamerCougarAttackPage]
})
export class TecladoGamerCougarAttackPageModule {}
