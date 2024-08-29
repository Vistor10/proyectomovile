import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogitechG335PageRoutingModule } from './logitech-g335-routing.module';

import { LogitechG335Page } from './logitech-g335.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogitechG335PageRoutingModule
  ],
  declarations: [LogitechG335Page]
})
export class LogitechG335PageModule {}
