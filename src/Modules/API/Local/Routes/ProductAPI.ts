/**
 * Входная точка API для сущности "Продукты"
 * @see {@link Product} Сущность "Продукты"
 */

import BaseAPI from "../BaseAPI";
import type { Product } from "@entities/types";
import { ProductList } from "@entities";

class ProductAPI extends BaseAPI {
  static entity: Product;
  static typeModelEntity: typeof ProductList;
  static modelEntity: ProductList = new ProductList();
}

export default ProductAPI;