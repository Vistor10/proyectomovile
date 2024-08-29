import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HyperxCloud3PageRoutingModule } from './hyperx-cloud-3-routing.module';

import { HyperxCloud3Page } from './hyperx-cloud-3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HyperxCloud3PageRoutingModule
  ],
  declarations: [HyperxCloud3Page]
})
export class HyperxCloud3PageModule {}
