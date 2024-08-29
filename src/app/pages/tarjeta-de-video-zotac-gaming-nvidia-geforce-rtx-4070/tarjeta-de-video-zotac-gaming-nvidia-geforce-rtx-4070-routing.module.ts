import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDeVideoZotacGamingNvidiaGeforceRtx4070Page } from './tarjeta-de-video-zotac-gaming-nvidia-geforce-rtx-4070.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDeVideoZotacGamingNvidiaGeforceRtx4070Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDeVideoZotacGamingNvidiaGeforceRtx4070PageRoutingModule {}
