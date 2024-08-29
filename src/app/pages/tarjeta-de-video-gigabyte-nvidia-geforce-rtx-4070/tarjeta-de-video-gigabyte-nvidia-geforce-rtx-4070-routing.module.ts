import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarjetaDeVideoGigabyteNvidiaGeforceRTX4070Page } from './tarjeta-de-video-gigabyte-nvidia-geforce-rtx-4070.page';

const routes: Routes = [
  {
    path: '',
    component: TarjetaDeVideoGigabyteNvidiaGeforceRTX4070Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarjetaDeVideoGigabyteNvidiaGeforceRTX4070PageRoutingModule {}
