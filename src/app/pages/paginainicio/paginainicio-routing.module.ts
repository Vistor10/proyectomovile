import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginainicioPage } from './paginainicio.page';

const routes: Routes = [
  {
    path: '',
    component: PaginainicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginainicioPageRoutingModule {}
