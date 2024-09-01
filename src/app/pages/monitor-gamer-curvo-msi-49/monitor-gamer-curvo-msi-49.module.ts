import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MonitorGamerCurvoMSI49PageRoutingModule } from './monitor-gamer-curvo-msi-49-routing.module';
import { MonitorGamerCurvoMSI49Page } from './monitor-gamer-curvo-msi-49.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonitorGamerCurvoMSI49PageRoutingModule
  ],
  declarations: [MonitorGamerCurvoMSI49Page]
})
export class MonitorGamerCurvoMSI49PageModule {}
