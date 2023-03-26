import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from '../models/Order';
import { ProductsService } from '../products/products.service';

@Injectable({
  providedIn: 'root',
})
export class ConfirmedGuard implements CanActivate {
  constructor(private router: Router, private prdService: ProductsService) {}
  order: Order | undefined;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.order = this.prdService.getOrder();
    if (this.order === undefined) {
      this.router.navigate(['/product-list']);

      return false;
    }
    return true;
  }
}
