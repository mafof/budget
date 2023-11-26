/**
 * Входная точка API для сущности "Валюта"
 * @see {@link Currency} Сущность "Валюта"
 */

import BaseAPI from "./BaseAPI";
import type { Currency } from "@entities/types";
import { CurrencyList } from "@entities";

class CurrencyAPI {

  static async create(obj: Omit<Currency, 'id'>): Promise<Currency> {
    return <Currency> await BaseAPI.create({ id: Infinity, ...obj }, (new CurrencyList()));
  }

  static async update(obj: Currency): Promise<Currency> {
    return <Currency> await BaseAPI.update(obj, (new CurrencyList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await CurrencyList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Currency | null> {
    return <Currency> await BaseAPI.get(id, (new CurrencyList()));
  }

  static async getAll(): Promise<Array<Currency>> {
    return <Array<Currency>> await BaseAPI.getAll((new CurrencyList()));
  }

  static async getCount(): Promise<number> {
    return await BaseAPI.getCount((new CurrencyList()));
  }
}

export default CurrencyAPI;