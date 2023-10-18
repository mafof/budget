/**
 * Описание сущности "Продукт"
 */

import type IBaseEntity from "./IBaseEntity";

interface IProduct extends IBaseEntity {
  name: string;
  is_sync?: Boolean
}

export default IProduct;