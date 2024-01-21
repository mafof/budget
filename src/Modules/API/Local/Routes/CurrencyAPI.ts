/**
 * Входная точка API для сущности "Валюта"
 * @see {@link Currency} Сущность "Валюта"
 */

import BaseAPI from "../BaseAPI";
import DataBaseAPI from "./../DataBaseAPI";
import type { Currency } from "@entities/types";
import { CurrencyList } from "@entities";
import type { DropDownDataObject } from '@types';

class CurrencyAPI extends BaseAPI {
  static entity: Currency;
  static typeModelEntity: typeof CurrencyList;
  static modelEntity: CurrencyList = new CurrencyList();

  static async getAllDropDown(): Promise<DropDownDataObject> {
    return <DropDownDataObject> await DataBaseAPI.getAllDropDown({ id: 'id', value: 'name' }, (new CurrencyList()));
  }
}

export default CurrencyAPI;