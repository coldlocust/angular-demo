import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product, products } from '../products';

/** @Component()装饰器指出它后面的类是组件
 *  @Component()提供有关组件的元数据（包括其选择器、模板和样式）
 *    -selector（app-product-alerts）用于标识组件。按照惯例，Angular 组件选择器以前缀 app- 开头，后跟组件名称。
 *    -templateUrl 引用了组件的HTML
 *    -styleUrls 引用了组件的CSS
 */
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent implements OnInit {
  /** @Input()装饰器指出此属性值要从本组件的父组件ProductListComponent中传入
   */
  @Input() product!: Product; //变量后使用 ！：告诉typescript编译器，这里一定有值，表示类型推断排除null、undefined
  /** 在组件类中，使用 @Output() 装饰器和 EventEmitter() 的实例定义一个名为 notify 的属性。
   *  使用 @Output() 配置 ProductAlertsComponent，这会让 ProductAlertsComponent 在 notify 属性的值发生变化时引发一个事件。
   */
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
