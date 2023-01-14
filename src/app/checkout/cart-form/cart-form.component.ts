import { Component } from '@angular/core';

@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent {
  name: string = '';
  address: string = '';
  creditCard: number = 0;

  handleSubmit(e: Event): void {
    e.preventDefault();
  }
}
