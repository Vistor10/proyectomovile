import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriasramPage } from './memoriasram.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriasramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriasramPageRoutingModule {}
