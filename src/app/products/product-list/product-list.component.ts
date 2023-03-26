import { Component, OnInit, TemplateRef } from '@angular/core';
import { Cart } from '../../models/Cart';
import { ProductsService } from '../products.service';
import { Product } from '../../models/Product';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [];

  constructor(
    private prdService: ProductsService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.prdService.index().subscribe((res) => {
      this.products = res;
    });
  }

  showSuccess(product: Cart) {
    this.toastService.show(`${product.name} succesfully added to cart`, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }

  onHandleCart(product: Cart): void {
    this.prdService.addToCart(product);
    this.showSuccess(product);
  }
}
