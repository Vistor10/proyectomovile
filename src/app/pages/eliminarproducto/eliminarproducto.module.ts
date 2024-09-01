import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EliminarproductoPageRoutingModule } from './eliminarproducto-routing.module';
import { EliminarproductoPage } from './eliminarproducto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarproductoPageRoutingModule
  ],
  declarations: [EliminarproductoPage]
})
export class EliminarproductoPageModule {}
