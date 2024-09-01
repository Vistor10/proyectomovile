import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuenteDePoderThermaltakeSmart700Page } from './fuente-de-poder-thermaltake-smart700.page';

const routes: Routes = [
  {
    path: '',
    component: FuenteDePoderThermaltakeSmart700Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuenteDePoderThermaltakeSmart700PageRoutingModule {}
