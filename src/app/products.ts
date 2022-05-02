/*
 * @Author: your name
 * @Date: 2022-05-02 11:11:50
 * @LastEditTime: 2022-05-02 11:11:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \angular-demo\src\app\products.ts
 */
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 299,
      description: ''
    }
  ];
  