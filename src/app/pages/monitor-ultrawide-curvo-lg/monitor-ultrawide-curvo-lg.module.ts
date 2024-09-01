import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MonitorUltrawideCurvoLGPageRoutingModule } from './monitor-ultrawide-curvo-lg-routing.module';
import { MonitorUltrawideCurvoLGPage } from './monitor-ultrawide-curvo-lg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorUltrawideCurvoLGPageRoutingModule
  ],
  declarations: [MonitorUltrawideCurvoLGPage]
})
export class MonitorUltrawideCurvoLGPageModule {}
