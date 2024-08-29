import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TecladoGamerRazerHuntsmanPage } from './teclado-gamer-razer-huntsman.page';

const routes: Routes = [
  {
    path: '',
    component: TecladoGamerRazerHuntsmanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoGamerRazerHuntsmanPageRoutingModule {}
