import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesadorAMDRyzen78700GPage } from './procesador-amd-ryzen7-8700-g.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesadorAMDRyzen78700GPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesadorAMDRyzen78700GPageRoutingModule {}
