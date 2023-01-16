import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  cart: Cart[] = [];
  constructor(private http: HttpClient) {}
  index(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }
  show(id: number): Observable<Product | undefined> {
    return this.index().pipe(
      map((products: Product[]) => products.find((p: Product) => p.id === id))
    );
  }
  addToCart(product: Cart): void {
    const prod: Cart | undefined = this.cart.find(
      (car) => car.id === product.id
    );
    if (prod) {
      prod.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
    console.log(this.cart);
  }
  getFromCart(): Cart[] {
    return this.cart;
  }
  updateFromCart(product: Cart, amount: number): void {
    const prod: Cart | undefined = this.cart.find(
      (car) => car.id === product.id
    );
    if (prod) {
      prod.quantity = amount;
    }
  }
  deleteFromCart(product: Cart): Cart[] {
    this.cart = this.cart.filter((car) => car.id !== product.id);
    return this.cart;
  }
}
