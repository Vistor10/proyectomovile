import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudifonosgamerPage } from './audifonosgamer.page';

const routes: Routes = [
  {
    path: '',
    component: AudifonosgamerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudifonosgamerPageRoutingModule {}
