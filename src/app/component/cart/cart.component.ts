import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart/cart.service';
import { Product } from 'src/app/products';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  // 定义cartService组件，以便把商品存放在购物车中
  items = this.cartService.getItems();
  // 注入cartService,以便购物车组件可以使用它
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    console.log(this);
  }
  deleteFromCart(product: Product) {
    this.cartService.deleteFromCart(product);
    window.alert('your current product has been deleted from the cart');
  }
}
