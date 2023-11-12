import { DataSource } from 'typeorm/browser';
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
      database: this.getPath('0_0_1__test'),
      location: 'default',
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
      entities: Object.values(Entities)
    });
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