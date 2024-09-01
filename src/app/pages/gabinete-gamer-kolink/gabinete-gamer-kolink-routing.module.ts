import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GabineteGamerKolinkPage } from './gabinete-gamer-kolink.page';

const routes: Routes = [
  {
    path: '',
    component: GabineteGamerKolinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabineteGamerKolinkPageRoutingModule {}
