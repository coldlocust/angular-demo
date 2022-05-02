import { Injectable } from '@angular/core';

import { Product } from '../products';

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

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
