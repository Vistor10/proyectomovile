import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacaMadreGigabyteAORUXELITEAXPageRoutingModule } from './placa-madre-gigabyte-aorux-elite-ax-routing.module';

import { PlacaMadreGigabyteAORUXELITEAXPage } from './placa-madre-gigabyte-aorux-elite-ax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlacaMadreGigabyteAORUXELITEAXPageRoutingModule
  ],
  declarations: [PlacaMadreGigabyteAORUXELITEAXPage]
})
export class PlacaMadreGigabyteAORUXELITEAXPageModule {}
