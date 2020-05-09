import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { ProductsComponent } from './products.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  imports: [MatGridListModule, MatCardModule, CommonModule],
  declarations: [ProductsComponent, ProductCardComponent],
  exports: [ProductsComponent],
})
export class ProductsModule {}
