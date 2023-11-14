/**
 * Входная точка API для сущности "Продукты"
 * @see {@link Product} Сущность "Продукты"
 */

import BaseAPI from "./BaseAPI";
import type { Product } from "@entities/types";
import { ProductList } from "@entities";

class ProductAPI {

  static async create(obj: Omit<Product, 'id'>): Promise<Product> {
    return <Product> await BaseAPI.create({ id: Infinity, ...obj }, (new ProductList()));
  }

  static async update(obj: Product): Promise<Product> {
    return <Product> await BaseAPI.update(obj, (new ProductList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await ProductList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Product | null> {
    return <Product> await BaseAPI.get(id, (new ProductList()));
  }
}

export default ProductAPI;