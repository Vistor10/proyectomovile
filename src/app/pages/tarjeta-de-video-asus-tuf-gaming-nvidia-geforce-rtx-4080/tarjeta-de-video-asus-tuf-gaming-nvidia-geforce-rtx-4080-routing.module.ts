import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDeVideoASUSTUFGAMINGNvidiaGeforceRtx4080Page } from './tarjeta-de-video-asus-tuf-gaming-nvidia-geforce-rtx-4080.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDeVideoASUSTUFGAMINGNvidiaGeforceRtx4080Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDeVideoASUSTUFGAMINGNvidiaGeforceRtx4080PageRoutingModule {}
