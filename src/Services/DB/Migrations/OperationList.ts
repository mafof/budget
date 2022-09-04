import BaseMigration from "./BaseMigration";

/**
 * Модель реализующая структуры таблицы operation_list, содержащая все операции по счету
 */
class OperationList extends BaseMigration {
  protected tableName: string = 'operation_list';
  
  constructor() {
    super();
  }

  protected async createTable(): Promise<void> {
    await this.sqlQuery(`
      CREATE TABLE ${this.tableName} (
        id integer PRIMARY KEY not NULL,
        type varchar(1) NOT NULL,
        money integer NOT NULL,
        penny integer NOT NULL
      )
    `, []);

    return await Promise.resolve();
  }
}

export default OperationList;