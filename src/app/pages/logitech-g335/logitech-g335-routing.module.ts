import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogitechG335Page } from './logitech-g335.page';

const routes: Routes = [
  {
    path: '',
    component: LogitechG335Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogitechG335PageRoutingModule {}
