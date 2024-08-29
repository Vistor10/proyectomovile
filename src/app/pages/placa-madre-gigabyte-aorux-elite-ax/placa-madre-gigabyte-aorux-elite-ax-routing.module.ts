import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacaMadreGigabyteAORUXELITEAXPage } from './placa-madre-gigabyte-aorux-elite-ax.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMadreGigabyteAORUXELITEAXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMadreGigabyteAORUXELITEAXPageRoutingModule {}
