import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacaMadreGigabyteZ790UDPage } from './placa-madre-gigabyte-z790-ud.page';

const routes: Routes = [
  {
    path: '',
    component: PlacaMadreGigabyteZ790UDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacaMadreGigabyteZ790UDPageRoutingModule {}
