import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesadorIntelCoreI914900Page } from './procesador-intel-core-i9-14900.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesadorIntelCoreI914900Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesadorIntelCoreI914900PageRoutingModule {}
