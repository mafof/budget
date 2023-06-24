/**
 * Класс "Базы данных"
 * @description Класс реализовывает объект подключения к БД
 */


class DataBase {
  private database: DataBase;

  constructor(database: DataBase) {
    this.database = database;
  }

  public static getDataBase(): DataBase | null {
    return null;
  }
}

export default DataBase;