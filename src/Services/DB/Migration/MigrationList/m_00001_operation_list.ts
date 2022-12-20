import { DataBase } from '@db';
import IMigration from './IMigration';

/**
 * Таблица operation_list, содержащая все операции по счету
 * @description Стурктура таблицы =>
 * create_type - Тип создания валюты (0 - создана пользователем, 1 - создана автоматически через скан QR кода)
 * type - Тип операции (0 - расход, 1 - доход)
 * money - Кол-во рублей/долларов/евро/... (в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (в данной операции)
 * currency - валюта (по умолчанию RUB)
 * created_at - Время создания
 * updated_at - Время обновления
 */
class m_00001_operation_list implements IMigration {
  private db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

  async run(): Promise<void> {
    await this.db.sqlQuery(`
      CREATE TABLE IF NOT EXISTS operation_list (
        id integer PRIMARY KEY NOT NULL,
        create_type smallint NOT NULL,
        type smallint NOT NULL,
        money integer NOT NULL DEFAULT 0,
        penny integer NOT NULL DEFAULT 0,
        currency string NOT NULL DEFAULT 'RUB',
        created_at integer NOT NULL,
        updated_at integer NOT NULL
      )
    `);
  }

  async down(): Promise<void> {
    await this.db.sqlQuery('DROP TABLE operation_list');
  }
}

export default m_00001_operation_list;