import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FuentesdepoderPageRoutingModule } from './fuentesdepoder-routing.module';
import { FuentesdepoderPage } from './fuentesdepoder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuentesdepoderPageRoutingModule
  ],
  declarations: [FuentesdepoderPage]
})
export class FuentesdepoderPageModule {}
