import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/Order';
import { ToastService } from 'src/app/shared/toast.service';
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
  constructor(
    private prdService: ProductsService,
    private router: Router,
    public toastService: ToastService
  ) {}
  ngOnInit(): void {
    this.getCart();
  }

  showUpdated(product: Cart) {
    this.toastService.show(`${product.name} succesfully updated in cart`, {
      classname: 'bg-success text-light',
      delay: 3000,
    });
  }

  showRemoved(product: Cart) {
    this.toastService.show(`${product.name} succesfully removed from cart`, {
      classname: 'bg-danger text-light',
      delay: 3000,
    });
  }

  emptyCart() {
    this.toastService.show(`Cart is empty`, {
      classname: 'bg-danger text-light',
      delay: 3000,
    });
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
    this.showRemoved(product);
  }

  updateCartQ(product: Cart): void {
    this.prdService.updateFromCart(product, product.quantity);
    this.getCart();
    this.showUpdated(product);
  }

  handleCheckOut(info: string[]): void {
    if (this.carts.length !== 0) {
      let newOrder: Order = {
        name: info[0],
        total: this.total,
        cart: this.carts,
        address: info[1],
      };
      this.prdService.createOrder(newOrder);
      this.router.navigate(['confirmation']);
    } else {
      this.emptyCart();
    }
  }
}
