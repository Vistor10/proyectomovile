import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HyperxCloud3Page } from './hyperx-cloud-3.page';

const routes: Routes = [
  {
    path: '',
    component: HyperxCloud3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HyperxCloud3PageRoutingModule {}
