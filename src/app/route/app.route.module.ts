import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from '../component/product-list/product-list.component';
import { ProductDetailsComponent } from '../component/product-details/product-details.component';
import { CartComponent } from '../component/cart/cart.component';

//配置路由
const routes: Routes = [
  { path: '', component: ProductListComponent },
  // 添加产品详情的路由，其 path 为 products/:productId，其 component 为 ProductDetailsComponent。
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouteModule {}
