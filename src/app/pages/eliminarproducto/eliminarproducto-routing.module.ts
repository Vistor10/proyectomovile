import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarproductoPage } from './eliminarproducto.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarproductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarproductoPageRoutingModule {}
