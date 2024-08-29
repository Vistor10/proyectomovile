import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuenteDePoderSEASONICVERTEXPXPage } from './fuente-de-poder-seasonic-vertexpx.page';

const routes: Routes = [
  {
    path: '',
    component: FuenteDePoderSEASONICVERTEXPXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuenteDePoderSEASONICVERTEXPXPageRoutingModule {}
