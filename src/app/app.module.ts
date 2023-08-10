import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './home/product/product.component';
import { CartProductComponent } from './cart/cart-product/cart-product.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    ProductComponent,
    CartProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
