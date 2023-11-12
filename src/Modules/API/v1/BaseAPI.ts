/**
 * Базовый класс реализации локального API приложения
 * @description
 * Данный базовый класс должны наследовать абсолютно все дочерние классы, в нем реализованы все стандартные операции над данными,
 * допускается создание дополнительных методов в классе потомков
 */

import DataBase from "@modules/database";
import { Entity } from "@entities/types";
import { BaseEntity } from "typeorm/browser";

abstract class BaseAPI {
  public modelName: BaseEntity | null = null;

  abstract create(obj: Entity): Promise<Entity>;
  abstract update(obj: Entity): Promise<Entity>;
  abstract delete(id: number): Promise<boolean>;
  abstract get(id: number): Promise<Entity | null>;
  //abstract find(obj: Entity): Promise<Entity[]>;

  /**
   * Функция создания записи
   * @param { Entity } obj - Объект данных
   * @param { BaseEntity } entity - Заранее созданный объект модели
   * @returns { Promise<Entity> } - Возвращает созданный элемент с присвоенным ID
   */
  protected async _create(obj: Entity, entity: BaseEntity): Promise<Entity> {
    if(obj.id !== undefined || obj.id !== null) {
      throw new Error("Property ID already definity. use method 'update' for updating record");
    }

    for(let key in obj) {
      entity[key] = obj[key];
    }

    const res = await entity.save();
    obj.id = BaseEntity.getId(res);

    return obj;
  }

  /**
   * Функция обновления записи
   * @param { Entity } obj - Объект данных
   * @param { BaseEntity } entity - Заранее созданный объект модели
   * @returns { Promise<Entity> } - Возвращает обновленный элемент
   */
  protected async _update(obj: Entity, entity: BaseEntity): Promise<Entity> {
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
  protected async _delete(entity: BaseEntity): Promise<boolean> {
    await entity.remove();
    return true;
  }

  /**
   * Функция выдачи записи по ID
   * @param { number } id - Первичный ключ
   * @param { BaseEntity } entity - Сущность
   * @returns 
   */
  protected async _get(id: number, entity: BaseEntity): Promise<Entity | null> {
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