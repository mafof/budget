/**
 * Входная точка API для сущности "Магазин"
 * @see {@link Shop} Сущность "Магазин"
 */

import BaseAPI from "./BaseAPI";
import type { Shop } from "@entities/types";
import { ShopList } from "@entities";

class ShopAPI {

  static async create(obj: Omit<Shop, 'id'>): Promise<Shop> {
    return <Shop> await BaseAPI.create({ id: Infinity, ...obj }, (new ShopList()));
  }

  static async update(obj: Shop): Promise<Shop> {
    return <Shop> await BaseAPI.update(obj, (new ShopList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await ShopList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Shop | null> {
    return <Shop> await BaseAPI.get(id, (new ShopList()));
  }

  static async getAll(): Promise<Array<Shop>> {
    return <Array<Shop>> await BaseAPI.getAll((new ShopList()));
  }

  static async getCount(): Promise<number> {
    return await BaseAPI.getCount((new ShopList()));
  }
}

export default ShopAPI;