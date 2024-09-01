import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TarjetasdevideoPageRoutingModule } from './tarjetasdevideo-routing.module';
import { TarjetasdevideoPage } from './tarjetasdevideo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarjetasdevideoPageRoutingModule
  ],
  declarations: [TarjetasdevideoPage]
})
export class TarjetasdevideoPageModule {}
