import { Product } from './products';

export interface CartProduct {
  num: number | 0;
  product: Product;
}
