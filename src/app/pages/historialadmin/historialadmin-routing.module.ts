import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialadminPage } from './historialadmin.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialadminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialadminPageRoutingModule {}
