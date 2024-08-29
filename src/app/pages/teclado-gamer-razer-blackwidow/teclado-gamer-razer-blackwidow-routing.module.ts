import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecladoGamerRazerBlackwidowPage } from './teclado-gamer-razer-blackwidow.page';

const routes: Routes = [
  {
    path: '',
    component: TecladoGamerRazerBlackwidowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoGamerRazerBlackwidowPageRoutingModule {}
