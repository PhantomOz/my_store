import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/Cart';
import { ProductsService } from '../products.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(private prdService: ProductsService) {}

  ngOnInit(): void {
    this.prdService.index().subscribe((res) => {
      this.products = res;
    });
  }

  onHandleCart(product: Cart): void {
    this.prdService.addToCart(product);
  }
}
