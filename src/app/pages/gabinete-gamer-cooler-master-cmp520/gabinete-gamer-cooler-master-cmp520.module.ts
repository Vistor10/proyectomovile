import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabineteGamerCoolerMasterCmp520PageRoutingModule } from './gabinete-gamer-cooler-master-cmp520-routing.module';

import { GabineteGamerCoolerMasterCmp520Page } from './gabinete-gamer-cooler-master-cmp520.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabineteGamerCoolerMasterCmp520PageRoutingModule
  ],
  declarations: [GabineteGamerCoolerMasterCmp520Page]
})
export class GabineteGamerCoolerMasterCmp520PageModule {}
