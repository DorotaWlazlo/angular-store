import { Component, ElementRef, ViewChild } from '@angular/core';
import { Product } from '../models/product.model';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private readonly storeService: StoreService) {}

  products = this.storeService.products;
  manufacturers = this.storeService.manufacturers;
  types = this.storeService.types;

  selectedManufacturers: string[] = [];
  selectedTypes: string[] = [];

  @ViewChild('manufacturerCheckbox')
  manufacturerCheckbox!: ElementRef;
  @ViewChild('typeCheckbox')
  typeCheckbox!: ElementRef;

  addToCart(product: Product) {
    if(!this.storeService.productsInCart.hasOwnProperty(product.name)){
      this.storeService.productsInCart[product.name] = 0;
    }
    this.storeService.productsInCart[product.name]++
    this.storeService.total += product.price
  }

  async onCheckboxChange(label: string) {
    console.log(label)
    if((await this.manufacturers).includes(label)){
      if (this.selectedManufacturers.includes(label)) {
        this.selectedManufacturers = this.selectedManufacturers.filter(item => item !== label);
      } else {
        this.selectedManufacturers.push(label);
      }
    }
    if((await this.types).includes(label)) {
      if (this.selectedTypes.includes(label)) {
        this.selectedTypes = this.selectedTypes.filter(item => item !== label);
      } else {
        this.selectedTypes.push(label);
      }
    }
  }

  refreshStore() {
   this.products = this.storeService.products
  }

  async sortItemsByPrice() {
    (await this.products).sort((a, b) => a.price - b.price);
  }

  async sortItemsByPriceDescending() {
    (await this.products).sort((a, b) => b.price - a.price);
  }

  async sortItemsByName(){
    (await this.products).sort((a, b) => a.name.localeCompare(b.name));
  }

  async sortItemsByNameDescending() {
    (await this.products).sort((a, b) => b.name.localeCompare(a.name));
  }

  async filter() {
    this.refreshStore()
    if(this.selectedManufacturers.length!=0){
      this.products = Promise.resolve((await this.products).filter((el) => this.selectedManufacturers.includes(el.manufacturer)))
    }
    if(this.selectedTypes.length!=0){
      this.products = Promise.resolve((await this.products).filter((el) => this.selectedTypes.includes(el.type)))
    }
  }

  clearFilters() {
    this.selectedManufacturers = []
    this.selectedTypes = []
    this.refreshStore()
    this.manufacturerCheckbox.nativeElement.checked = false;
    this.typeCheckbox.nativeElement.checked = false;
  }
}
