import { Component } from '@angular/core';
import { ProductsInCart, StoreService } from '../services/store.service';
import { Product } from '../models/product.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
constructor(private readonly storeService: StoreService, private readonly modalService: NgbModal) {}

  productsInCart: ProductsInCart = this.storeService.productsInCart;
  products = this.storeService.products;

  addToCart(product: Product) {
    if(!this.productsInCart.hasOwnProperty(product.name)){
      this.storeService.productsInCart[product.name] = 0;
    }
    this.storeService.productsInCart[product.name]++
    this.storeService.total += product.price
  }

  removeFromCart(product: Product) {
    this.storeService.productsInCart[product.name]--
    this.storeService.total -= product.price
    if(this.storeService.productsInCart[product.name] == 0){
      delete this.storeService.productsInCart[product.name]
    }
  }

  clearCart() {
    for (let prop in this.storeService.productsInCart) {
      if (this.storeService.productsInCart.hasOwnProperty(prop)) {
        delete this.storeService.productsInCart[prop];
      }
    }
    this.storeService.total = 0;
  }

  getTotal() {
    return this.storeService.total
  }

  openVerticallyCentered(content: any, content2: any) {
    if(this.storeService.total === 0)
      this.modalService.open(content2, { centered: true });
    else
		  this.modalService.open(content, { centered: true });
    this.clearCart()
	}
}
