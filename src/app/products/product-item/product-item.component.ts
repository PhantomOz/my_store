import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Cart } from '../../models/Cart';
import { Product } from '../../models/Product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product | undefined;
  quantity: number = 1;
  @Output() addToCart: EventEmitter<Cart> = new EventEmitter<Cart>();

  constructor(private prdService: ProductsService) {}

  handleCart(product?: Product): void {
    product &&
      this.addToCart.emit({ ...product, quantity: Number(this.quantity) });
  }
}
