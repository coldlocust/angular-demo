import { Injectable } from '@angular/core';

import { Product } from 'src/app/res/products';
import { CartProduct } from 'src/app/res/cart.product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  //items属性：存储购物车中当前产品的数组
  items: CartProduct[] = [];
  constructor() {}

  addToCart(product: Product) {
    console.log('service--------------addToCart');
    console.log(this.items);
    const index = this.items.findIndex(
      (item) => item.product.id === product.id
    );
    // 如果购物车已存在该商品
    if (index !== -1) {
      ++this.items[index].num;
    } else {
      this.items.push({ num: 1, product });
    }
  }
  deleteFromCart(cproduct: CartProduct) {
    console.log('service--------------deleteFromCart');
    const index = this.items.findIndex(
      (item) => item.product.id === cproduct.product.id
    );
    if (this.items[index].num > 1) {
      --this.items[index].num;
      window.alert(`remove one ${cproduct.product.name} from the cart !!!`);
    } else {
      this.items.splice(index, 1);
      window.alert(`the ${cproduct.product.name} has been delete from cart !!!`);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
