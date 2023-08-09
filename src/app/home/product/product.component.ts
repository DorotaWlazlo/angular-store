import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input('product') product: Product | null = null;
  @Output('addToCart') addToCart = new EventEmitter();

  clicked() {
    this.addToCart.emit(this.product);
  }
}
