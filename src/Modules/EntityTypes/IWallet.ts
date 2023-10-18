/**
 * Описание сущности "Кошелек"
 */

import type IBaseEntity from "./IBaseEntity";
import type ICurrency from "./ICurrency";

interface IWallet extends IBaseEntity {
  name: string;
  currency: ICurrency;
  is_sync?: Boolean;
}

export default IWallet;