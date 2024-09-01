import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GabineteGamerCoolerMasterCmp520Page } from './gabinete-gamer-cooler-master-cmp520.page';

const routes: Routes = [
  {
    path: '',
    component: GabineteGamerCoolerMasterCmp520Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabineteGamerCoolerMasterCmp520PageRoutingModule {}
