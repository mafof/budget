/**
 * Описание сущности "Цена продукта"
 */

import type IBaseEntity from "./IBaseEntity";
import type IProductList from "./IProduct";
import type IOperation from "./IOperation";

interface ICostProduct extends IBaseEntity {
  money: number;
  penny: number;
  is_sync?: Boolean;
  product: IProductList;
  operation: IOperation;
}

export default ICostProduct;