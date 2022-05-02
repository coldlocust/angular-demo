import { Injectable } from '@angular/core';

import { Product } from 'src/app/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //items属性：存储购物车中当前产品的数组
  items: Product[] = [];
  constructor() {}

  addToCart(product: Product) {
    this.items.push(product);
  }
  deleteFromCart(product: Product) {
    this.items.filter((item) => item != product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
