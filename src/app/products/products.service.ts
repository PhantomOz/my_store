import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  index(): Observable<Product[]> {
    return this.http.get<Product[]>('../../assets/data.json');
  }
  show(id: number): Observable<Product | undefined> {
    return this.index().pipe(
      map((products: Product[]) => products.find((p: Product) => p.id === id))
    );
  }
}
