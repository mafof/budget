import { DataBase } from '@db';
import IMigration from './MigrationList/IMigration';
import * as migrationList from '@migartion-list';

/**
 * Класс для проведения миграций
 */
class Migration {
  private db: DataBase;

  constructor() {
    this.db = new DataBase();
  }

  /**
   * Проверяет, есть ли данная миграция в списке уже ранее смигрированных данных
   * @param {string} migrationName - Наименование миграции
   * @returns {Boolean} - Сделана ли миграция в БД
   */
  private async isHaveMigrationTable(migrationName: string): Promise<Boolean> {
    return await this.db.sqlQuery('SELECT name FROM migration_list WHERE name = ?', [migrationName]) !== null;
  }

  /**
   * Метод выполняющий миграции
   */
  public async migrateRun(): Promise<void> {
    await this.db.sqlQuery(`
      CREATE TABLE IF NOT EXISTS migration_list (
        id integer PRIMARY KEY NOT NULL,
        name string NOT NULL,
        created_at integer NOT NULL,
        updated_at integer NOT NULL
      )
    `);

    for(let key in migrationList) {
      if(!(await this.isHaveMigrationTable(key))) {
        const migration: IMigration = new migrationList[key]();
        await migration.run();

        const unixTimeMS: Number = Date.now();
        await this.db.sqlQuery('INSERT INTO migration_list (name, created_at, updated_at) VALUES (?, ?, ?)', [key, unixTimeMS, unixTimeMS]);
      }
    }
  }

  /**
   * Метод анулирующий все миграции
   */
  public async migrationDown(): Promise<void> {
    // Проверяем создана ли таблица с списком миграйций =>
    if((await this.db.sqlQuery("SELECT name FROM sqlite_master WHERE type='table' AND name = migration_list")) !== null) {
      for(let key in migrationList) {
        if(await this.isHaveMigrationTable(key)) {
          const migration: IMigration = new migrationList[key]();
          await migration.down();

          await this.db.sqlQuery(`DELETE FROM migration_list WHERE name = ?`, [key]);
        }
      }
    }
  }
}

export default Migration;