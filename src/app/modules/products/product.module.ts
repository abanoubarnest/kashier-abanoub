import { ProductDrownListComponent } from './pages/product-drown-list/product-drown-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AlertComponent } from './pages/alert/alert.component';


@NgModule({
  declarations: [ ProductDrownListComponent, AlertComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule.forRoot(),
  ],
})
export class ProductModule { }
