/**
 * Входная точка API для сущности "Кошельки"
 * @see {@link Wallet} Сущность "Кошельки"
 */

import BaseAPI from "../BaseAPI";
import DataBaseAPI from "../DataBaseAPI";
import type { Wallet } from "@entities/types";
import { WalletList } from "@entities";
import type { DropDownDataObject } from "@types";

class WalletAPI extends BaseAPI {
  static entity: Wallet;
  static typeModelEntity: typeof WalletList;
  static modelEntity: WalletList = new WalletList();

  static async getAllDropDown(): Promise<DropDownDataObject> {
    return <DropDownDataObject> await DataBaseAPI.getAllDropDown({ id: 'id', value: 'name' }, (new WalletList()));
  }
}

export default WalletAPI;