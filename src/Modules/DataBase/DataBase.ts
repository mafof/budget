import { DataSource } from 'typeorm/browser';
import RNFS from 'react-native-fs';

import * as Entities from './Entities/index'

/**
 * Класс "Базы данных"
 * @description Класс реализовывает объект подключения к БД
 */

class DataBase {
  private database: DataSource;

  constructor () {
    this.database = new DataSource({
      type: 'react-native',
      database: this.getPath('0_0_1'),
      location: 'default',
      synchronize: true,
      logging: 'all',
      logger: 'advanced-console',
      entities: Object.values(Entities)
    });

    this.database.initialize();
  }

  private getPath(name: string): string {
    return `${RNFS.DownloadDirectoryPath}/${name}.db`;
  }

  /**
   * @deprecated
   */
  public static getDataBase(): DataSource | null {
    return null;
  }
}

export default DataBase;