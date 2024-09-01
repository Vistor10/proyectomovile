import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RazerKrakenKittyPageRoutingModule } from './razer-kraken-kitty-routing.module';
import { RazerKrakenKittyPage } from './razer-kraken-kitty.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RazerKrakenKittyPageRoutingModule
  ],
  declarations: [RazerKrakenKittyPage]
})
export class RazerKrakenKittyPageModule {}
