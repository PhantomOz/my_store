import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/Cart';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  onHandleCart(product: Cart): void {
    console.log(product);
  }
}
