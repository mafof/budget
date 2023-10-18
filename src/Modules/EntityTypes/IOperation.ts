/**
 * Описание сущности "Операция"
 */

import type IBaseEntity from "./IBaseEntity";

import type IWallet from "./IWallet";
import type ICategory from "./ICategory";
import type IShop from "./IShop";

interface IOperation extends IBaseEntity {
  type: number;
  money: number;
  penny: number;
  wallet: IWallet;
  category?: ICategory;
  shop?: IShop;
  is_sync?: Boolean
}

export default IOperation;