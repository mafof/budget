/**
 * Описание сущности "Магазин"
 */

import type IBaseEntity from "./IBaseEntity";

interface IShop extends IBaseEntity {
  name: string;
  is_sync?: Boolean
}

export default IShop;