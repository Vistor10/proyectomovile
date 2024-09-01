import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginainicioPageRoutingModule } from './paginainicio-routing.module';
import { PaginainicioPage } from './paginainicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginainicioPageRoutingModule
  ],
  declarations: [PaginainicioPage]
})
export class PaginainicioPageModule {}
