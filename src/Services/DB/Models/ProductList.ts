import BaseModel from "./BaseModel";

/**
 * Модель реализующая структуры таблицы product_list, содержащая наименования всех продуктов
 * @description Стурктура таблицы =>
 * name - Наименование продукта (является уникальным ключом)
 * created_at - Время создания
 * updated_at - Время обновления
 */
class ProductList extends BaseModel {
  protected tableName: string = 'product_list';


  protected async createTable(): Promise<void> {
    await this.sqlQuery(`
      CREATE TABLE IF NOT EXISTS ? (
        name string NOT NULL UNIQUE,
        created_at integer NOT NULL,
        updated_at integer NOT NULL
      )
    `, [this.tableName]);

    return await Promise.resolve();
  }
}

export default ProductList;