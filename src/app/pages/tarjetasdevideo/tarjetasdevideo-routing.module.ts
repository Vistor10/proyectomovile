import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TarjetasdevideoPage } from './tarjetasdevideo.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetasdevideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetasdevideoPageRoutingModule {}
