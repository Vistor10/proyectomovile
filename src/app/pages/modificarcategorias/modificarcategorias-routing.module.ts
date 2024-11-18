import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarcategoriasPage } from './modificarcategorias.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarcategoriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarcategoriasPageRoutingModule {}
