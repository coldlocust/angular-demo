import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 引入路由配置信息
import { AppRouteModule } from './route/app.route.module';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { ProductListComponent } from './component/product-list/product-list.component';
//生成器会自动把 ProductAlertsComponent 添加到 AppModule 中，以便它能用于本应用的其它组件中
import { ProductAlertComponent } from './component/product-alert/product-alert.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { CartComponent } from './component/cart/cart.component';


@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, AppRouteModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    CartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
