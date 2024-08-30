import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonitorGamerSamsungOdysseyG6PageRoutingModule } from './monitor-gamer-samsung-odyssey-g6-routing.module';

import { MonitorGamerSamsungOdysseyG6Page } from './monitor-gamer-samsung-odyssey-g6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorGamerSamsungOdysseyG6PageRoutingModule
  ],
  declarations: [MonitorGamerSamsungOdysseyG6Page]
})
export class MonitorGamerSamsungOdysseyG6PageModule {}
