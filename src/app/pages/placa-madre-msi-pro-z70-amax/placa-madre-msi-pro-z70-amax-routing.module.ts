import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaMadreMSIPROZ70AMAXPage } from './placa-madre-msi-pro-z70-amax.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMadreMSIPROZ70AMAXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMadreMSIPROZ70AMAXPageRoutingModule {}
