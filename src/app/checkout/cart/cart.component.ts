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
    this.carts = this.prdService.getFromCart();
    console.log('cart', this.carts);
    this.carts.forEach((cart) => {
      this.total += cart.quantity * cart.price;
    });
  }
  removeItem(product: Cart): void {
    this.carts = this.prdService.deleteFromCart(product);
  }
}
