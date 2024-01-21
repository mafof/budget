/**
 * Класс прослойка между БД и роутами для реализации простых CRUD операций
 */

import DataBase from "@modules/database";
import type { Entity } from "@entities/types";
import { BaseEntity } from "typeorm/browser";

import type {
  DropDownDataObject
} from '@types';

type ColumnNameOfDataBase = {
  id: string,
  value: string
};

class DataBaseAPI {

  /**
   * Исключенные свойства не попадающие в результат работы функций
   */
  public static excludeField: Array<string> = [
    'operations'
  ];

  /**
   * Функция создания записи
   * @param { Entity } obj - Объект данных
   * @param { BaseEntity } entity - Заранее созданный объект модели
   * @returns { Promise<Entity> } - Возвращает созданный элемент с присвоенным ID
   */
  public static async create(obj: Entity, entity: BaseEntity): Promise<Entity> {
    // Заполнение в модель поступающих данных =>
    for(let key in obj) {
      if(key === 'id') continue;      
      entity[key] = obj[key];
    }

    const res = await entity.save();

    for(let key in res) {
      if(typeof res[key] !== 'function' && !this.excludeField.includes(key)) {
        obj[key] = res[key]
      }
    }    
    
    return obj;
  }

  /**
   * Функция обновления записи
   * @param { Entity } obj - Объект данных
   * @param { BaseEntity } entity - Заранее созданный объект модели
   * @returns { Promise<Entity> } - Возвращает обновленный элемент
   */
  public static async update(obj: Entity, entity: BaseEntity): Promise<Entity> {
    if(obj.id === undefined || obj.id === null) {
      throw new Error("Property ID is not already definity. use method 'create' for creating record");
    }

    for(let key in obj) {
      entity[key] = obj[key];
    }

    await entity.save();
    return obj;
  }

  /**
   * Функция удаления записи
   * @param { BaseEntity } entity - Заранее созданный объект модели
   * @returns { boolean } - Удачно ли прошло удаление
   */
  public static async delete(entity: BaseEntity): Promise<boolean> {
    await entity.remove();
    return true;
  }

  /**
   * Функция выдачи записи по ID
   * @param { number } id - Первичный ключ
   * @param { BaseEntity } entity - Сущность
   * @returns { Promise<Entity | null> } - Возвращает элемент по признаку ID
   */
  public static async get(id: number, entity: BaseEntity): Promise<Entity | null> {
    const db = DataBase.getInstance();
    if(!db.database.isInitialized) throw new Error('Database is not init');
    
    const rep = await db.database.getRepository(Object.getPrototypeOf(entity).constructor.name);
    const el = await rep.findOneBy({ id });
    if(el) {
      let objEntity = { id: Infinity };
      for(let key in el) {
        objEntity[key] = el[key];
      }

      return objEntity;
    } else {
      return null;
    }
  }

  /**
   * Функция Возвращающая все записи 
   * @param { BaseEntity } entity - Сущность
   * @returns { Promise<Array<Entity>> } - Возвращает список всех элементов
   */
  public static async getAll(entity: BaseEntity): Promise<Array<Entity>> {
    const db = DataBase.getInstance();
    if(!db.database.isInitialized) throw new Error('Database is not init');
    
    const rep = await db.database.getRepository(Object.getPrototypeOf(entity).constructor.name);
    const el = await rep.find();

    let arrObjEntity: Array<Entity> = [];
    for(let i = 0; i < el.length; i++) {
      if(arrObjEntity[i] === undefined) {
        arrObjEntity[i] = { id: Infinity };
      }

      for(let key in el) {
        arrObjEntity[i][key] = el[key];
      }
    }

    return arrObjEntity;
  }

  /**
   * Функция возвращает список элементов для drop down списка
   * @param { ColumnNameOfDataBase } column - Колонки
   * @param { BaseEntity } entity - Сущность
   * @returns { Promise<DropDownDataObject> } - Возвращает список drop down записей
   */
  public static async getAllDropDown(column: ColumnNameOfDataBase, entity: BaseEntity): Promise<DropDownDataObject> {
    const db = DataBase.getInstance();
    if(!db.database.isInitialized) throw new Error('Database is not init');

    let selectColumn = {
      id: `tb.${column.id}`,
      value: `tb.${column.value}`
    };

    const rep = await db.database.getRepository(Object.getPrototypeOf(entity).constructor.name);
    const el = await rep
      .createQueryBuilder('tb')
      .select([ selectColumn.id, selectColumn.value ])
      .orderBy(`${selectColumn.id}`, 'ASC')
      .getMany()

    let arrObjEntity: DropDownDataObject = [];
    for(let i = 0; i < el.length; i++) {
      arrObjEntity.push({
        id: Number(el[i][column.id]),
        value: String(el[i][column.value])
      });
    }

    return arrObjEntity;
  }

  /**
   * Функция возвращает кол-во записей
   * @param { BaseEntity } entity - Сущность 
   * @returns { Promise<number> } - Возвращает кол-во записей
   */
  public static async getCount(entity: BaseEntity): Promise<number> {
    const db = DataBase.getInstance();
    if(!db.database.isInitialized) throw new Error('Database is not init');
    
    const rep = await db.database.getRepository(Object.getPrototypeOf(entity).constructor.name);
    return await rep.count();
  }
}

export default DataBaseAPI;