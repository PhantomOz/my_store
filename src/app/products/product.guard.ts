import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductGuard implements CanActivate {
  constructor(private router: Router, private prdService: ProductsService) {}
  product: Product | undefined;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = Number(route.paramMap.get('id'));
    async function getProduct(
      id: number,
      prdService: ProductsService,
      router: Router
    ): Promise<boolean> {
      const product = await firstValueFrom(prdService.show(id));

      // console.log(product);
      if (isNaN(id) || id < 1 || product === undefined) {
        alert('invalid product id');
        router.navigate(['/product-list']);
        return false;
      }
      return true;
    }
    return getProduct(id, this.prdService, this.router);
    return true;
  }
}
