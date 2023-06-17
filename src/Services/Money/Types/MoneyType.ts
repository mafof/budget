/**
 * Тип "Деньги"
 * @description Описывает сущность определенного числа денег
 * 
 * @param {Number} integerMoney - Целочисленное значение валюты
 * @param {Number} fractionalMoney - Дробная значение валюты
 * @param {CurrencyType} currency - Валюта
 */

import CurrencyType from "./CurrencyType";

type MoneyType = {
  integerMoney: Number
  fractionalMoney?: Number,
  currency: CurrencyType
};

export default MoneyType;