import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuenteDePoderSEASONICG12Page } from './fuente-de-poder-seasonic-g12.page';

const routes: Routes = [
  {
    path: '',
    component: FuenteDePoderSEASONICG12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuenteDePoderSEASONICG12PageRoutingModule {}
