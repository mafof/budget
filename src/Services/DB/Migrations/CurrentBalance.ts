import BaseMigration from "./BaseMigration";

/**
 * Модель реализующая структуры таблицы current_balance, содержит баланс счета с учетом операций
 */
class CurrentBalance extends BaseMigration {
  protected tableName: string = 'current_balance';

  constructor() {
    super();
    this.checkIsHaveTable();
  }

  protected createTable(): boolean {
    throw new Error("Method not implemented.");
  }
}

export default CurrentBalance;