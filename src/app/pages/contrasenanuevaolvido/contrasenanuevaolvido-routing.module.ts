import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContrasenanuevaolvidoPage } from './contrasenanuevaolvido.page';

const routes: Routes = [
  {
    path: '',
    component: ContrasenanuevaolvidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContrasenanuevaolvidoPageRoutingModule {}
