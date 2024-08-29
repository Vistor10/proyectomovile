import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RazerKrakenKittyPage } from './razer-kraken-kitty.page';

const routes: Routes = [
  {
    path: '',
    component: RazerKrakenKittyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RazerKrakenKittyPageRoutingModule {}
