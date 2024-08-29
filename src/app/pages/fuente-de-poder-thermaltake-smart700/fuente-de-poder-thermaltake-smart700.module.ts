import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FuenteDePoderThermaltakeSmart700PageRoutingModule } from './fuente-de-poder-thermaltake-smart700-routing.module';

import { FuenteDePoderThermaltakeSmart700Page } from './fuente-de-poder-thermaltake-smart700.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuenteDePoderThermaltakeSmart700PageRoutingModule
  ],
  declarations: [FuenteDePoderThermaltakeSmart700Page]
})
export class FuenteDePoderThermaltakeSmart700PageModule {}
