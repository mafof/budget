/**
 * Базовый класс реализующий стандартный список CRUD операций с БД 
 */

import DataBase from "@modules/database";
import { Entity } from "@entities/types";
import { BaseEntity } from "typeorm/browser";

class BaseAPI {

  /**
   * Исключенные свойства не попадающие 
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
   * @returns 
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
}

export default BaseAPI;