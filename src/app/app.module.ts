import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductItemDetailComponent } from './products/product-item-detail/product-item-detail.component';
import { CartComponent } from './checkout/cart/cart.component';
import { CartItemsComponent } from './checkout/cart-items/cart-items.component';
import { CartFormComponent } from './checkout/cart-form/cart-form.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    CartComponent,
    CartItemsComponent,
    CartFormComponent,
    ConfirmationComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'cart', component: CartComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-list/:id', component: ProductItemDetailComponent },
      { path: '', redirectTo: 'product-list', pathMatch: 'full' },
    ]),
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
