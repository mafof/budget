/**
 * Базовый класс "Операции"
 * @description Базовый класс необходим для его наследование остальных классов в директории операций.
 */

import { MoneyType } from "../Types";

class Operations {
  protected baseMoney: MoneyType;

  constructor(money: MoneyType) {
    this.baseMoney = money;
  }
}

export default Operations;