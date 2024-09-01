import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitorUltrawideCurvoLGPage } from './monitor-ultrawide-curvo-lg.page';

const routes: Routes = [
  {
    path: '',
    component: MonitorUltrawideCurvoLGPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonitorUltrawideCurvoLGPageRoutingModule {}
