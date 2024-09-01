import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorGamerCurvoMSI49Page } from './monitor-gamer-curvo-msi-49.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorGamerCurvoMSI49Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorGamerCurvoMSI49PageRoutingModule {}
