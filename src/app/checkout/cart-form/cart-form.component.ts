import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css'],
})
export class CartFormComponent {
  name: string = '';
  address: string = '';
  creditCard: number = NaN;
  @Output() submit: EventEmitter<string[]> = new EventEmitter();

  handleSubmit(e: Event): void {
    e.preventDefault();
    this.submit.emit([this.name, this.address, String(this.creditCard)]);
  }
}
