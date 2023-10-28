/**
 * Базовый класс реализации локального API приложения
 * @description
 * Данный базовый класс должны наследовать абсолютно все дочерние классы, в нем реализованы все стандартные операции над данными,
 * допускается создание дополнительных методов в классе потомков
 */

import { Entity } from "@entities/types";
import { BaseEntity } from "typeorm/browser";

class BaseAPI { 
  private static entityModelDataBase: BaseEntity;

  public static create(obj: Entity) {
    throw new Error('123');
  }

  public static update(obj: Entity, id: number) {
    throw new Error('123');
  }

  public static delete(id: number): boolean {
    throw new Error('123');
  }

  public static get(id: number): Entity {
    throw new Error('123');
  }

  public static find(obj: Entity): Entity[] {
    throw new Error('123'); 
  }
}

export default BaseAPI;