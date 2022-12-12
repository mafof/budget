/**
 * Класс операций над валютой
 * @description Класс умеет складывать/вычитать рубли с копейками (с учетом того что 1 RUB = 100 Penny).
 */

class MoneyOperation {
  /**
   * Производит вычитание аргументов
   * @param {Number} moneyOne - Сумма 1
   * @param {Number} moneyTwo - Сумма 2, которую будем вычитать с суммы 1
   */
  public static minus(moneyOne: number, moneyTwo: number): number {
    let percentOne = moneyOne * 100;
    let percentTwo = moneyTwo * 100;
    return (percentOne - percentTwo) / 100;
  }

  /**
   * Производит суммирование аргументов
   * @param {Number} moneyOne - Сумма 1
   * @param {Number} moneyTwo - Сумма 2, которую будем суммировать с суммой 1
   */
  public static plus(moneyOne: number, moneyTwo: number): number {
    let percentOne = moneyOne * 100;
    let percentTwo = moneyTwo * 100;
    return (percentOne + percentTwo) / 100;
  }

  /**
   * Разделяет Деньги на рубли и копейки
   * @param {Number} money - Деньги
   * @returns {Array} Возвращает массив где 1-ый элемент кол-во рублей, а 2-ой элемент кол-во копеек
   */
  public static getMoneyAndPenny(money: number) {
    return money * 100;
  }
}

export default MoneyOperation;