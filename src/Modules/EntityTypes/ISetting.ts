/**
 * Описание сущности "Настройка"
 */

import type IBaseEntity from "./IBaseEntity";

interface ISetting extends IBaseEntity {
  key: string;
  value?: string;
}

export default ISetting;