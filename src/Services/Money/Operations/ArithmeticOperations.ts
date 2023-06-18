/**
 * Класс "Математические операции над деньгами"
 * @description Класс реализовывает методы математических операций над объектом "MoneyType"
 * @see MoneyType
 */

import { MoneyType } from "../Types";
import Operations from "./Operations";

class ArithmeticOperations extends Operations {
  constructor(money: MoneyType) {
    super(money);
  }

  /**
   * Функция проверяет являются ли входящие объекты одинаковой валютой
   * @param {MoneyType} moneyOne - Объект типа "Деньги"
   * @param {MoneyType} moneyTwo - Объект типа "Деньги"
   * @returns {boolean} - Совпадают ли объекты валюты
   */
  private static isSameCurrency(moneyOne: MoneyType, moneyTwo: MoneyType): boolean {
    return moneyOne.currency.code === moneyTwo.currency.code;
  }

  /**
   * Функция суммирующая объекты типа "Деньги"
   * @param {MoneyType} moneyOne - Объект типа "Деньги"
   * @param {MoneyType} moneyTwo - Объект типа "Деньги"
   * @returns {MoneyType} - Конечная сумма
   */
  public static plus(moneyOne: MoneyType, moneyTwo: MoneyType): MoneyType {
    if(!ArithmeticOperations.isSameCurrency(moneyOne, moneyOne)) { 
      throw new Error("Валюты не совпадают") 
    }

    let res: MoneyType = {
      integerMoney: moneyOne.integerMoney + moneyTwo.integerMoney,      
      currency: moneyTwo.currency
    }

    if(moneyOne.fractionalMoney && moneyTwo.fractionalMoney) {
      res.fractionalMoney = moneyOne.fractionalMoney + moneyTwo.fractionalMoney;
    }

    return res;
  }

  /**
   * Функция вычитает объекты типа "Деньги"
   * @param {MoneyType} moneyOne - Объект типа "Деньги"
   * @param {MoneyType} moneyTwo - Объект типа "Деньги"
   * @returns {MoneyType} - Конечная сумма
   */
  public static minus(moneyOne: MoneyType, moneyTwo: MoneyType): MoneyType {
    if(!ArithmeticOperations.isSameCurrency(moneyOne, moneyOne)) { 
      throw new Error("Валюты не совпадают") 
    }

    let res: MoneyType = {
      integerMoney: moneyOne.integerMoney - moneyTwo.integerMoney,      
      currency: moneyTwo.currency
    }

    if(moneyOne.fractionalMoney && moneyTwo.fractionalMoney) {
      res.fractionalMoney = moneyOne.fractionalMoney - moneyTwo.fractionalMoney;
    }

    return res;
  }

  /**
   * Функция суммирующая объекты типа "Деньги" (при наличие созданного объекта)
   * @param {MoneyType} money - Объект типа "Деньги"
   * @returns {MoneyType} - Конечная сумма
   */
  public plus(money: MoneyType): MoneyType {
    if(!ArithmeticOperations.isSameCurrency(this.baseMoney, money)) { 
      throw new Error("Валюты не совпадают") 
    }

    let res: MoneyType = {
      integerMoney: this.baseMoney.integerMoney + money.integerMoney,      
      currency: money.currency
    }

    if(this.baseMoney.fractionalMoney && money.fractionalMoney) {
      res.fractionalMoney = this.baseMoney.fractionalMoney + money.fractionalMoney;
    }

    return res;
  }

  /**
   * Функция вычитает объекты типа "Деньги" (при наличие созданного объекта)
   * @param {MoneyType} money - Объект типа "Деньги"
   * @returns {MoneyType} - Конечная сумма
   */
  public minus(money: MoneyType): MoneyType {
    if(!ArithmeticOperations.isSameCurrency(this.baseMoney, money)) { 
      throw new Error("Валюты не совпадают") 
    }

    let res: MoneyType = {
      integerMoney: this.baseMoney.integerMoney - money.integerMoney,      
      currency: money.currency
    }

    if(this.baseMoney.fractionalMoney && money.fractionalMoney) {
      res.fractionalMoney = this.baseMoney.fractionalMoney - money.fractionalMoney;
    }

    return res;
  }
}

export default ArithmeticOperations;