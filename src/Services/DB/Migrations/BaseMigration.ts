import * as SQLite from 'expo-sqlite';

/**
 * Базовый класс реализующий методы для миграций таблиц3
 * @TODO
 *  - Переписать на базовый класс работы с БД
 */
abstract class BaseMigration {
  protected abstract tableName: string;
  protected db: SQLite.WebSQLDatabase;

  constructor() {
    this.db = SQLite.openDatabase('db', '1.0');
    
    // Включаем поддержку внешних ключей =>
    this.db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
      console.log('Foreign keys turned on')
    );
  }

  protected checkIsHaveTable(): boolean {
    console.dir(this.tableName);
    return true;
  }

  /**
   * Функция создаяющая структуру таблицы
   * @return {boolean} - Успешна ли операция
   */
  protected abstract createTable(): boolean;
}

export default BaseMigration;