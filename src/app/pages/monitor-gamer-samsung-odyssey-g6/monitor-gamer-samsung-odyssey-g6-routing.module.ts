import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorGamerSamsungOdysseyG6Page } from './monitor-gamer-samsung-odyssey-g6.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorGamerSamsungOdysseyG6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorGamerSamsungOdysseyG6PageRoutingModule {}
