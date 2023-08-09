import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent {
  @Input('product') product: Product | null = null;
  @Input('quantity') quantity: number = 0;
  @Output('addToCart') addToCart = new EventEmitter();
  @Output('removeFromCart') removeFromCart = new EventEmitter();

  addToCartButton() {
    this.addToCart.emit(this.product);
    this.quantity++
  }

  removeFromCartButton() {
    if(this.quantity > 0) {
      this.removeFromCart.emit(this.product);
      this.quantity--
    }
  }

  getTotal() {
    if(this.product)
    return this.quantity * this.product.price
    return 0
  }
}
