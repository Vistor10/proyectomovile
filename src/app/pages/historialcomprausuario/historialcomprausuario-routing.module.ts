import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialcomprausuarioPage } from './historialcomprausuario.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialcomprausuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialcomprausuarioPageRoutingModule {}
