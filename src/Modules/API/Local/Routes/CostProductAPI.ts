/**
 * Входная точка API для сущности "Цена на товар"
 * @see {@link CostProduct} Сущность "Цена на товар"
 */

import BaseAPI from "../BaseAPI";
import type { CostProduct } from "@entities/types";
import { CostProduct as EnemyCostProduct } from "@entities";

class CostProductAPI extends BaseAPI {
  static entity: CostProduct;
  static typeModelEntity: typeof EnemyCostProduct;
  static modelEntity: EnemyCostProduct = new EnemyCostProduct();
}

export default CostProductAPI;