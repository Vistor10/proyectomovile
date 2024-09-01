import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AudifonosgamerPageRoutingModule } from './audifonosgamer-routing.module';
import { AudifonosgamerPage } from './audifonosgamer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudifonosgamerPageRoutingModule
  ],
  declarations: [AudifonosgamerPage]
})
export class AudifonosgamerPageModule {}
