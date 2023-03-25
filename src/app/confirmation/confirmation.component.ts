import { Component } from '@angular/core';
import { Order } from '../models/Order';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  order: Order | undefined;

  constructor(private prdService: ProductsService) {}
  ngOnInit() {
    this.order = this.prdService.getOrder();
  }
}
