import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GabineteGamerKolinkPageRoutingModule } from './gabinete-gamer-kolink-routing.module';

import { GabineteGamerKolinkPage } from './gabinete-gamer-kolink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GabineteGamerKolinkPageRoutingModule
  ],
  declarations: [GabineteGamerKolinkPage]
})
export class GabineteGamerKolinkPageModule {}
