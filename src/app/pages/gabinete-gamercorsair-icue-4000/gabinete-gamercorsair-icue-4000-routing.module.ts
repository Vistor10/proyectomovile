import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GabineteGamercorsairIcue4000Page } from './gabinete-gamercorsair-icue-4000.page';

const routes: Routes = [
  {
    path: '',
    component: GabineteGamercorsairIcue4000Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabineteGamercorsairIcue4000PageRoutingModule {}
