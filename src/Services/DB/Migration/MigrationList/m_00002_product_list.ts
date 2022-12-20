import { DataBase } from '@db';
import IMigration from './IMigration';

/**
 * Таблица реализующая структуры таблицы product_list, содержащая наименования всех продуктов
 * @description Стурктура таблицы =>
 * name - Наименование продукта (является уникальным ключом)
 * created_at - Время создания
 * updated_at - Время обновления
 */
class m_00002_product_list implements IMigration {
  private db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

  async run(): Promise<void> {
    await this.db.sqlQuery(`
      CREATE TABLE IF NOT EXISTS product_list (
        name string NOT NULL UNIQUE,
        created_at integer NOT NULL,
        updated_at integer NOT NULL
      )
    `);
  }

  async down(): Promise<void> {
    await this.db.sqlQuery('DROP TABLE product_list');
  }
}

export default m_00002_product_list;