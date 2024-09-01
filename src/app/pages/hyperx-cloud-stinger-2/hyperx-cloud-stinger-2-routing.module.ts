import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HyperxCloudStinger2Page } from './hyperx-cloud-stinger-2.page';

const routes: Routes = [
  {
    path: '',
    component: HyperxCloudStinger2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HyperxCloudStinger2PageRoutingModule {}
