/**
 * Тип "Деньги"
 * @description Описывает сущность определенного числа денег
 * 
 * @param {number} integerMoney - Целочисленное значение валюты
 * @param {number} fractionalMoney - Дробная значение валюты
 * @param {CurrencyType} currency - Валюта
 */

import CurrencyType from "./CurrencyType";

type MoneyType = {
  integerMoney: number
  fractionalMoney?: number,
  currency: CurrencyType
};

export default MoneyType;