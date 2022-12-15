import BaseModel from "./BaseModel";

/**
 * Модель реализующая структуры таблицы operation_list, содержащая все операции по счету
 * @description Стурктура таблицы =>
 * create_type - Тип создания валюты (0 - создана пользователем, 1 - создана автоматически через скан QR кода)
 * type - Тип операции (0 - расход, 1 - доход)
 * money - Кол-во рублей/долларов/евро/... (в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (в данной операции)
 * currency - валюта (по умолчанию RUB)
 * created_at - Время создания
 * updated_at - Время обновления
 */
class OperationList extends BaseModel {
  protected tableName: string = 'operation_list';
  
  constructor() {
    super();
    this.createTable();
  }

  protected async createTable(): Promise<void> {
    await this.sqlQuery(`
      CREATE TABLE IF NOT EXISTS ? (
        id integer PRIMARY KEY NOT NULL,
        create_type smallint NOT NULL,
        type smallint NOT NULL,
        money integer NOT NULL DEFAULT 0,
        penny integer NOT NULL DEFAULT 0,
        currency string NOT NULL DEFAULT 'RUB',
        created_at integer NOT NULL,
        updated_at integer NOT NULL
      )
    `, [this.tableName]);

    return await Promise.resolve();
  }
}

export default OperationList;