import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GabineteGamerAerocoolShardPage } from './gabinete-gamer-aerocool-shard.page';

const routes: Routes = [
  {
    path: '',
    component: GabineteGamerAerocoolShardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GabineteGamerAerocoolShardPageRoutingModule {}
