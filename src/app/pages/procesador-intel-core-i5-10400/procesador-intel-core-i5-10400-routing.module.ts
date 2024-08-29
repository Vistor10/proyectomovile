import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesadorIntelCoreI510400Page } from './procesador-intel-core-i5-10400.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesadorIntelCoreI510400Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesadorIntelCoreI510400PageRoutingModule {}
