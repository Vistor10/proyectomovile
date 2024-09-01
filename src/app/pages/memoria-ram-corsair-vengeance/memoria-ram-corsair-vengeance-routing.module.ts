import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoriaRamCorsairVengeancePage } from './memoria-ram-corsair-vengeance.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRamCorsairVengeancePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRamCorsairVengeancePageRoutingModule {}
