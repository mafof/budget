/**
 * Описание сущности "Валюта"
 */

import type IBaseEntity from "./IBaseEntity";

interface ICurrency extends IBaseEntity {
  code: string;
  number: number;
  name: string;
  nameIntegerCurrency: string;
  nameFractionalCurrency?: string;
}

export default ICurrency;