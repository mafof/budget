import BaseMigration from "./BaseMigration";

/**
 * Модель реализующая структуры таблицы operation_list, содержащая все операции по счету
 */
class OperationList extends BaseMigration {
  protected tableName: string = 'operation_list';
  
  constructor() {
    super();
    this.checkIsHaveTable();
  }

  protected createTable(): boolean {
    throw new Error("Method not implemented.");
  }
}

export default OperationList;