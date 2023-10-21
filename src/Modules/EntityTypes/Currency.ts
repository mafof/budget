import type Entity from "./Entity";

/**
 * Сущность "Валюта"
 * Описание свойств =>
 * code - Код валюты (строковый)
 * number - Номер валюты (числовой)
 * name - Наименование валюты
 * nameIntegerCurrency - Человечкское наименование целочисленной части валюты (сокращенно)
 * nameFractionalCurrency - Человечесоке наименование дробной часть валюты (сокращенно) 
 */
type Currency = Entity & {
  code: string;
  number: number;
  name: string;
  nameIntegerCurrency: string;
  nameFractionalCurrency?: string;
};

export default Currency;