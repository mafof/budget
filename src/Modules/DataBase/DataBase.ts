/* eslint-disable no-console */
import { LogBox } from 'react-native';
import { DataSource } from 'typeorm/browser';
import RNFS from 'react-native-fs';

import * as Entities from './Entities/index'
import * as Migrations from './Migrations/index';

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
      database: 'test_0_0_0',
      location: 'default',
      logging: 'all',
      logger: 'advanced-console',
      migrationsRun: false,
      entities: Object.values(Entities),
      migrations: Object.values(Migrations)
    });
  }

  /** 
   * Проверяет, нужно ли делать первичную синхронизацию 
   */
  public async firstSynchronize(): Promise<boolean> {
    if(!this.database.isInitialized) await this.database.initialize()
    
    LogBox.uninstall();
    LogBox.ignoreAllLogs();

    try {
      await this.database.query(`SELECT 1 FROM operation_list`);
      return true;
    } catch (err: any) {
      if(err.message.match(/no such table/) !== null) {
        await this.database.synchronize();
        await this.database.runMigrations();
      } else {
        console.error(err.message)
        return false;
      }
    } finally {
      LogBox.install();
      LogBox.ignoreAllLogs(false);
      return true;
    }
  }

  /**
   * @deprecated
   */
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