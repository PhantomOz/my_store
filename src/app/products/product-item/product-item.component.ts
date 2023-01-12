import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../../models/Product';
import { Cart } from '../../models/Cart';
import { ProductsService } from '../products.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  products: Product[] = [];
  quantity: number = 1;
  @Output() addToCart: EventEmitter<Cart> = new EventEmitter<Cart>();

  constructor(private prdService: ProductsService) {}

  ngOnInit(): void {
    this.prdService.index().subscribe((res) => {
      this.products = res;
    });
  }
  handleCart(product: Product): void {
    this.addToCart.emit({ ...product, quantity: Number(this.quantity) });
  }
}
