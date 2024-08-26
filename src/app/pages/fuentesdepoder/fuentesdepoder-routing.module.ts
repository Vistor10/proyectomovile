import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuentesdepoderPage } from './fuentesdepoder.page';

const routes: Routes = [
  {
    path: '',
    component: FuentesdepoderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuentesdepoderPageRoutingModule {}
