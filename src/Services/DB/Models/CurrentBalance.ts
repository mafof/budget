import BaseMigration from "./BaseModel";

/**
 * Модель реализующая структуры таблицы current_balance, содержит баланс счета с учетом операций
 */
class CurrentBalance extends BaseMigration {
  protected tableName: string = 'current_balance';

  constructor() {
    super();
    this.createTable();
  }

  protected async createTable(): Promise<void> {
    await this.sqlQuery(`
      CREATE TABLE IF NOT EXISTS ${this.tableName} (
        id integer PRIMARY KEY not NULL,
        money integer NOT NULL DEFAULT 0,
        penny integer NOT NULL DEFAULT 0,
        at integer NOT NULL
      )
    `, []);

    return await Promise.resolve();
  }
}

export default CurrentBalance;