import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root',
})

export class StoreService {
  constructor(private readonly http: HttpClient) {
  this.getAllProducts().then((chars) => (this.productsList = chars));
}
  
  private productsList: Product[] = [];

  async getAllProducts(): Promise<Product[]> {
    const response = await firstValueFrom(
      this.http.get<Product[]>(`${environment.apiUrl}`)
    );

    return response;
  }

  async getManufacturers(): Promise<string[]> {
    const response = await firstValueFrom(
      this.http.get<string[]>(`${environment.apiUrl}/manufacturers`)
    );

    return response;
  }

  async getTypes(): Promise<string[]> {
    const response = await firstValueFrom(
      this.http.get<string[]>(`${environment.apiUrl}/types`)
    );

    return response;
  }

  products: Promise<Product[]> = Promise.resolve(this.getAllProducts());
  types: Promise<string[]> = Promise.resolve(this.getTypes());
  manufacturers: Promise<string[]> = Promise.resolve(this.getManufacturers());

  productsInCart: ProductsInCart = {};

  total = 0;
}

export type ProductsInCart = Record<string, number>;