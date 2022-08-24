import * as SQLite from 'expo-sqlite';

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
    this.db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () => console.info('Foreign keys turned on'));
  }

  /**
   * Выполняет запрос
   * @param {string} sql - SQL запрос
   * @param {Array<unknown>} args - Аргументы
   * @returns {Object | null} Объект результата запроса или NULL
   */
  protected sqlQuery(sql: string, args: Array<unknown>): Object | null {

    return null;
  }
}

export default DataBase;