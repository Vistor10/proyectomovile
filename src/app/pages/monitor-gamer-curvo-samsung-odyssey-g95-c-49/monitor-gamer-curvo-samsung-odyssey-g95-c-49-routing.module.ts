import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonitorGamerCurvoSamsungOdysseyG95C49Page } from './monitor-gamer-curvo-samsung-odyssey-g95-c-49.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorGamerCurvoSamsungOdysseyG95C49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorGamerCurvoSamsungOdysseyG95C49PageRoutingModule {}
