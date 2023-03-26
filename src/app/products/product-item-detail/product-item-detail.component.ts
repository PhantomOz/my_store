import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Product } from 'src/app/models/Product';
import { Cart } from 'src/app/models/Cart';
import { ToastService } from 'src/app/shared/toast.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css'],
})
export class ProductItemDetailComponent implements OnInit {
  product: Product | undefined;
  quantity: number = 1;
  constructor(
    private route: ActivatedRoute,
    private prdService: ProductsService,
    public toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.prdService.show(id).subscribe((res) => {
      this.product = res;
    });
  }

  showSuccess(product: Cart) {
    this.toastService.show(`${product.name} succesfully added to cart`, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }

  handleCart(product: Product | undefined) {
    if (product) {
      const cart = { ...product, quantity: this.quantity };
      this.prdService.addToCart(cart);
      this.showSuccess(cart);
    }
  }
}
