import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FuenteDePoderCLIOATX700PageRoutingModule } from './fuente-de-poder-clio-atx-700-routing.module';
import { FuenteDePoderCLIOATX700Page } from './fuente-de-poder-clio-atx-700.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FuenteDePoderCLIOATX700PageRoutingModule
  ],
  declarations: [FuenteDePoderCLIOATX700Page]
})
export class FuenteDePoderCLIOATX700PageModule {}
