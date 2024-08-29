import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaMadreMSIA520MAPROPage } from './placa-madre-msi-a520-m-apro.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMadreMSIA520MAPROPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMadreMSIA520MAPROPageRoutingModule {}
