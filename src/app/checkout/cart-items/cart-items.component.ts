import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cart } from '../../models/Cart';
@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.css'],
})
export class CartItemsComponent {
  @Input() cart: Cart | undefined;
  @Input() amount: number = 0;
  @Output() removeFromCart: EventEmitter<Cart> = new EventEmitter();

  handleRemoveCart(product?: Cart): void {
    this.removeFromCart.emit(product);
  }
}
