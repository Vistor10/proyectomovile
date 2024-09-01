import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GabinetesPage } from './gabinetes.page';

const routes: Routes = [
  {
    path: '',
    component: GabinetesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabinetesPageRoutingModule {}
