import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecladoGamerCougarAttackPage } from './teclado-gamer-cougar-attack.page';

const routes: Routes = [
  {
    path: '',
    component: TecladoGamerCougarAttackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoGamerCougarAttackPageRoutingModule {}
