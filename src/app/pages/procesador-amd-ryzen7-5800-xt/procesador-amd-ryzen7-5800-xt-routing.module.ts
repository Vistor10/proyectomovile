import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcesadorAMDRyzen75800XTPage } from './procesador-amd-ryzen7-5800-xt.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesadorAMDRyzen75800XTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesadorAMDRyzen75800XTPageRoutingModule {}
