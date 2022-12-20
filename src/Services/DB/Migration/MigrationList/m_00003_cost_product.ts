import { DataBase } from '@db';
import IMigration from './IMigration';

/**
 * Таблица реализующая структуры таблицы cost_product, содержащая ценники на продукты с временем момента их ввода
 * @description Стурктура таблицы =>
 * product_id - ID продукта
 * opertation_id - ID операции
 * money - Кол-во рублей/долларов/евро/... (стоимость в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (стоимость в данной операции)
 * currency - валюта (по умолчанию RUB)
 * time_at - Момент времени (UNIX)
 * created_at - Время создания
 * updated_at - Время обновления
 */
class m_00003_cost_product implements IMigration {
  private db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

  async run(): Promise<void> {
    await this.db.sqlQuery(`
      CREATE TABLE IF NOT EXISTS cost_product (
        product_id STRING NOT NULL,
        opertation_id integer NOT NULL,
        money integer NOT NULL DEFAULT 0,
        penny integer NOT NULL DEFAULT 0,
        currency string NOT NULL DEFAULT 'RUB',
        time_at integer NOT NULL,
        created_at integer NOT NULL,
        updated_at integer NOT NULL,
        FOREIGN KEY(product_id) REFERENCES product_list(name),
        FOREIGN KEY(opertation_id) REFERENCES operation_list(id)
      )
    `);
  }

  async down(): Promise<void> {
    await this.db.sqlQuery('DROP TABLE cost_product');
  }
}

export default m_00003_cost_product;