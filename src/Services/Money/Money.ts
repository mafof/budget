/**
 * Класс "Деньги"
 * @description Данный класс описывает базовое взаимодействие с деньгами любого типа валюты.
 */

class Money {
  /* Целочисленная часть валюты */
  private integerMoney: Number;

  /* Дробная часть валюты */
  private fractionalMoney: Number;

  private currency: String;

  constructor(integerMoney: Number, fractionalMoney: Number, currency: String) {
    this.integerMoney = integerMoney;
    this.fractionalMoney = fractionalMoney;
    this.currency = currency;
  }

  /**
   * Преобразовывает деньги в читаемую строку для вывода пользователю
   * @param {Number} value - Деньги
   */
  convertMoneyToString(value: number): String {
    // code...
    return `${value}`;
  }
}

export default Money;
