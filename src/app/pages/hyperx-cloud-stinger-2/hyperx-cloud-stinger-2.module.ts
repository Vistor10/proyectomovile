import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HyperxCloudStinger2PageRoutingModule } from './hyperx-cloud-stinger-2-routing.module';

import { HyperxCloudStinger2Page } from './hyperx-cloud-stinger-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HyperxCloudStinger2PageRoutingModule
  ],
  declarations: [HyperxCloudStinger2Page]
})
export class HyperxCloudStinger2PageModule {}
