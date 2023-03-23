import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/Cart';
import { ProductsService } from '../../products/products.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  carts: Cart[] = [];
  total: number = 0;
  constructor(private prdService: ProductsService) {}
  ngOnInit(): void {
    this.getCart();
  }
  getCart(): void {
    this.carts = this.prdService.getFromCart();
    console.log('cart', this.carts);
    let tots: number = 0;
    this.carts.forEach((cart) => {
      tots += cart.quantity * cart.price;
    });
    this.total = tots;
  }
  removeItem(product: Cart): void {
    this.carts = this.prdService.deleteFromCart(product);
    this.getCart();
  }

  updateCartQ(product: Cart): void {
    this.prdService.updateFromCart(product, product.quantity);
    this.getCart();
  }
}
