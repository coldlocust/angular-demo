import { Component, OnInit } from '@angular/core';
// Angular 路由器来组合 products 数据和路由信息以显示每个产品的特定详情。
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../products';
// 使用CartService把一个商品添加到购物车中
import { CartService } from '../../service/cart/cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  /** ActivatedRoute
   *  通过private route: ActivatedRoute 添加为构造函数括号内的参数，来把ActivedRoute注入到constructor()中
   *  Angular路由器加载的每个组件都有自己专属的ActivatedRoute
   *  ActivatedRoute中包含有关路由和路由参数的信息
   *  路由参数由此路由中定义的路径变量相对应
   *  -访问路由参数：使用route.snapshot,它是一个ActivedRouteSnapshot,其中包含有关该特定时刻的活动路由信息
   *  在ngOnInit方法中，由路由参数提取productId,并在products数组中找到相应的产品
   */
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService //通过把购物车服务注入到constructor中注入它
  ) {}

  ngOnInit(): void {
    // First get the productId from the current route
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // Find the product that correspond with the id provided in route
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('your product has been added to the cart');
  }

 
}
