import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDeVideoASUSDualNvidiaRTX4070Page } from './tarjeta-de-video-asus-dual-nvidia-rtx4070.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDeVideoASUSDualNvidiaRTX4070Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDeVideoASUSDualNvidiaRTX4070PageRoutingModule {}
