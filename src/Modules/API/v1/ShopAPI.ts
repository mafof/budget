/**
 * Входная точка API для сущности "Магазин"
 * @see {@link Shop} Сущность "Магазин"
 */

import DataBase from "@modules/database";
import BaseAPI from "./BaseAPI";
import { Shop } from "@entities/types";
import { ShopList } from "@entities";

class ShopAPI extends BaseAPI {

  async create(obj: Shop): Promise<Shop> {
    return <Shop> await this._create(obj, (new ShopList()));
  }

  async update(obj: Shop): Promise<Shop> {
    return <Shop> await this._update(obj, (new ShopList()));
  }

  async delete(id: number): Promise<boolean> {
    const db = DataBase.getInstance();
    if(!db.database.isInitialized) throw new Error('Database is not init');

    const rep = db.database.getRepository(ShopList);
    const el = await rep.findOneBy({ id });
    return el ? await this._delete(el) : true;
  }

  async get(id: number): Promise<Shop | null> {
    return <Shop> await this._get(id, (new ShopList()));
  }
}

export default ShopAPI;