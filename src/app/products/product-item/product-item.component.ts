import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductsService } from '../products.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  products: Product[] = [];

  constructor(private prdService: ProductsService) {}

  ngOnInit(): void {
    this.prdService.index().subscribe((res) => {
      this.products = res;
    });
  }
}
