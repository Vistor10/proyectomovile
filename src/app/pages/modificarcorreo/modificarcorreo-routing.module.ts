import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarcorreoPage } from './modificarcorreo.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarcorreoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarcorreoPageRoutingModule {}
