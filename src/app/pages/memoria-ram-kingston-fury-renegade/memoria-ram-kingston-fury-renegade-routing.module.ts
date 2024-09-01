import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoriaRamKingstonFuryRenegadePage } from './memoria-ram-kingston-fury-renegade.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRamKingstonFuryRenegadePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRamKingstonFuryRenegadePageRoutingModule {}
