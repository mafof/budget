import { DataSource } from 'typeorm/browser';
import { typeORMDriver } from 'react-native-sqlite-storage';
import RNFS from 'react-native-fs';

import * as Entities from './Entities/index'

/**
 * Класс "Базы данных"
 * @description Класс реализовывает объект подключения к БД
 */

class DataBase {

  private static instance: DataBase;
  public database: DataSource;

  private constructor () {
    this.database = new DataSource({
      type: 'react-native',
      driver: typeORMDriver,
      database: 'test_phisic_device_0_0_0__test',//this.getPath('test_phisic_device_0_0_0__test'),
      location: 'default',
      logging: 'all',
      logger: 'advanced-console',
      entities: Object.values(Entities)
    });
  }

  public async test() {

    if(!this.database.isInitialized) await this.database.initialize()

    const res = await this.database.query(`SELECT * FROM "sqlite_master" WHERE "type" = 'table' AND "name" = 'typeorm_metadata'`)

    console.log(res)
  }

  private getPath(name: string): string {
    return `${RNFS.DownloadDirectoryPath}/${name}.db`;
  }

  public static getInstance(): DataBase {
    if(!DataBase.instance) {
      DataBase.instance = new DataBase();
    }

    return DataBase.instance;
  }
}

export default DataBase;