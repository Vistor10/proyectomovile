import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GabineteGamerAerocoolShardPageRoutingModule } from './gabinete-gamer-aerocool-shard-routing.module';
import { GabineteGamerAerocoolShardPage } from './gabinete-gamer-aerocool-shard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabineteGamerAerocoolShardPageRoutingModule
  ],
  declarations: [GabineteGamerAerocoolShardPage]
})
export class GabineteGamerAerocoolShardPageModule {}
