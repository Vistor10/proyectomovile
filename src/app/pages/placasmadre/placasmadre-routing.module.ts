import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacasmadrePage } from './placasmadre.page';

const routes: Routes = [
  {
    path: '',
    component: PlacasmadrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacasmadrePageRoutingModule {}
