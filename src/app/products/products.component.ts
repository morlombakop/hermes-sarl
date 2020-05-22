import { Component, OnInit, Input } from '@angular/core';
import { products } from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = products;
  cols = 3;
  @Input() isXSmallScreen = false;
  @Input() isSmallScreen = false;

  ngOnInit() {
    if (this.isXSmallScreen) {
      this.cols = 1;
    } else if (this.isSmallScreen) {
      this.cols = 2;
    }
  }
}
