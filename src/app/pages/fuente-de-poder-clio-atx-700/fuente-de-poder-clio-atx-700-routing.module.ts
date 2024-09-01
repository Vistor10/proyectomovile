import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuenteDePoderCLIOATX700Page } from './fuente-de-poder-clio-atx-700.page';

const routes: Routes = [
  {
    path: '',
    component: FuenteDePoderCLIOATX700Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuenteDePoderCLIOATX700PageRoutingModule {}
