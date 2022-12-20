import BaseModel from "./BaseModel";

/**
 * Модель реализующая структуры таблицы cost_product, содержащая ценники на продукты с временем момента их ввода
 * @description Стурктура таблицы =>
 * product_id - ID продукта
 * opertation_id - ID операции
 * money - Кол-во рублей/долларов/евро/... (стоимость в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (стоимость в данной операции)
 * currency - валюта (по умолчанию RUB)
 * time_at - Момент времени (UNIX)
 * created_at - Время создания
 * updated_at - Время обновления
 * 
 * @deprecated Переписать под модель, где реализована система миграций
 */
class CostProduct extends BaseModel {
  protected tableName: string = 'cost_product';


  protected async createTable(): Promise<void> {
    await this.sqlQuery(`
      CREATE TABLE IF NOT EXISTS ? (
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
    `, [this.tableName]);

    return await Promise.resolve();
  }
}

export default CostProduct;