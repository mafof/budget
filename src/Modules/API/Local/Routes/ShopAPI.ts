/**
 * Входная точка API для сущности "Магазин"
 * @see {@link Shop} Сущность "Магазин"
 */

import BaseAPI from "../BaseAPI";
import DataBaseAPI from "../DataBaseAPI";
import type { Shop } from "@entities/types";
import { ShopList } from "@entities";
import type { DropDownDataObject } from '@types';

class ShopAPI extends BaseAPI {
  static entity: Shop;
  static typeModelEntity: typeof ShopList;
  static modelEntity: ShopList = new ShopList();

  static async getAllDropDown(): Promise<DropDownDataObject> {
    return <DropDownDataObject> await DataBaseAPI.getAllDropDown({ id: 'id', value: 'name' }, (new ShopList()));
  }
}

export default ShopAPI;