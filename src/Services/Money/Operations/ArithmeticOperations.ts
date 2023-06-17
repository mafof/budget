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

  public static plus(money: MoneyType): Number {
    return money.integerMoney;
  }

  public plus(money: number, s: number): number {
    return money + s;
  }
}

export default ArithmeticOperations;