import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemoriaRamDdr4XPGSPECTRIXPage } from './memoria-ram-ddr4-xpg-spectrix.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRamDdr4XPGSPECTRIXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRamDdr4XPGSPECTRIXPageRoutingModule {}
