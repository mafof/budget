import DataBase from '../DataBase';

/**
 * Базовый класс реализующий методы для миграций таблиц
 * 
 * @deprecated Переписать под модель, где реализована система миграций
 */
abstract class BaseModel extends DataBase {
  protected abstract tableName: string;

  constructor() {
    super();
  }

  protected async isHaveTable(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      resolve(((await this.sqlQuery("SELECT name FROM sqlite_master WHERE type='table' AND name = ?", [this.tableName])) !== null));
    });
  }

  /**
   * Функция создаяющая структуру таблицы
   */
  protected abstract createTable(): Promise<void>;
}

export default BaseModel;