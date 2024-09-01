import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemoriaRamKingstonFuryBeastPage } from './memoria-ram-kingston-fury-beast.page';

const routes: Routes = [
  {
    path: '',
    component: MemoriaRamKingstonFuryBeastPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoriaRamKingstonFuryBeastPageRoutingModule {}
