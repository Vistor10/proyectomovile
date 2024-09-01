import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TecladoGamerLogitechG213Page } from './teclado-gamer-logitech-g213.page';

const routes: Routes = [
  {
    path: '',
    component: TecladoGamerLogitechG213Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecladoGamerLogitechG213PageRoutingModule {}
