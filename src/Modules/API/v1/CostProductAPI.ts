/**
 * Входная точка API для сущности "Цена на товар"
 * @see {@link CostProduct} Сущность "Цена на товар"
 */

import BaseAPI from "./BaseAPI";
import type { CostProduct } from "@entities/types";
import { CostProduct as EnemyCostProduct } from "@entities";

class CostProductAPI {

  static async create(obj: Omit<CostProduct, 'id'>): Promise<CostProduct> {
    return <CostProduct> await BaseAPI.create({ id: Infinity, ...obj }, (new EnemyCostProduct()));
  }

  static async update(obj: CostProduct): Promise<CostProduct> {
    return <CostProduct> await BaseAPI.update(obj, (new EnemyCostProduct()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await EnemyCostProduct.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<CostProduct | null> {
    return <CostProduct> await BaseAPI.get(id, (new EnemyCostProduct()));
  }

  static async getAll(): Promise<Array<CostProduct>> {
    return <Array<CostProduct>> await BaseAPI.getAll((new EnemyCostProduct()));
  }

  static async getCount(): Promise<number> {
    return await BaseAPI.getCount((new EnemyCostProduct()));
  }
}

export default CostProductAPI;