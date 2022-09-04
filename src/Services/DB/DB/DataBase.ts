import * as SQLite from 'expo-sqlite';
import { ResultSet, ResultSetError } from 'expo-sqlite';

/**
 * Базовый класс методов для рабьоты с Базой данных
 */
class DataBase {
  protected db: SQLite.WebSQLDatabase | null = null;

  constructor() {
    this.openDataBase();
  }

  protected openDataBase(): void {
    this.db = SQLite.openDatabase('db', '1.0');

    // Включаем поддержку внешних ключей =>
    this.db?.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => console.info('Foreign keys turned on'));
  }

  /**
   * Выполняет запрос 
   * @param {string} sql - SQL запрос
   * @param {Array<unknown>} args - Аргументы
   * @returns {Object | null} Объект результата запроса или NULL
   */
  protected sqlQuery(sql: string, args: Array<unknown> = []): Promise<Object | null | undefined> {
    return new Promise((resolve, reject) => {
      this.db?.exec([{ sql, args }], false, (err, result) => {
        if(result) {
          if(this.isSetResult(result)) {
            resolve((result[0].rows.length === 0) ? null : result[0].rows);
          }

          if(this.isSetResultError(result)) {
            resolve(result[0].error);
          }
        } else {
          reject(`Object is not have type ResultSet | ResultSetError, result = ${result}`);
        }
      })
    })
  }

  /**
   * Фукнция проверяющая является ли аргумент объектом типа ResultSet
   * @param {(ResultSet | ResultSetError)[] | undefined} result - Проверяемый объект
   * @returns {Boolean} - Проверяем является ли объект типа ResultSet
   */
  private isSetResult(result: (ResultSet | ResultSetError)[] | undefined): result is ResultSet[] {
    return (result) ? (result as ResultSet[])[0].rows !== undefined : false;
  }

  /**
   * Фукнция проверяющая является ли аргумент объектом типа ResultSetError
   * @param {(ResultSet | ResultSetError)[] | undefined} result - Проверяемый объект
   * @returns {Boolean} - Проверяем является ли объект типа ResultSetError
   */
  private isSetResultError(result: (ResultSet | ResultSetError)[] | undefined): result is ResultSetError[] {
    return (result) ? (result as ResultSetError[])[0].error !== undefined : false;
  }
}

export default DataBase;