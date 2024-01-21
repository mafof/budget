/**
 * Входная точка API для сущности "Настройки"
 * @see {@link Setting} Сущность "Настройки"
 */

import BaseAPI from "../BaseAPI";
import type { Setting } from "@entities/types";
import { SettingList } from "@entities";

class SettingAPI extends BaseAPI {
  static entity: Setting;
  static typeModelEntity: typeof SettingList;
  static modelEntity: SettingList = new SettingList();
}

export default SettingAPI;