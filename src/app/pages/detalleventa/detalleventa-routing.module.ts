import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleventaPage } from './detalleventa.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleventaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleventaPageRoutingModule {}
