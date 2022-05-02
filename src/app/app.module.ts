import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
//生成器会自动把 ProductAlertsComponent 添加到 AppModule 中，以便它能用于本应用的其它组件中
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  // 添加产品详情的路由，其 path 为 products/:productId，其 component 为 ProductDetailsComponent。
  { path: 'products/:productId', component: ProductDetailsComponent },
];
@NgModule({
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
