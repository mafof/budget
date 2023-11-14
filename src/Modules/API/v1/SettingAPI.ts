/**
 * Входная точка API для сущности "Настройки"
 * @see {@link Setting} Сущность "Настройки"
 */

import BaseAPI from "./BaseAPI";
import type { Setting } from "@entities/types";
import { SettingList } from "@entities";

class SettingAPI {

  static async create(obj: Omit<Setting, 'id'>): Promise<Setting> {
    return <Setting> await BaseAPI.create({ id: Infinity, ...obj }, (new SettingList()));
  }

  static async update(obj: Setting): Promise<Setting> {
    return <Setting> await BaseAPI.update(obj, (new SettingList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await SettingList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Setting | null> {
    return <Setting> await BaseAPI.get(id, (new SettingList()));
  }
}

export default SettingAPI;