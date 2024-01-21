/**
 * Базовый класс для роутов реализующий стандартные методы
 */

import DataBaseAPI from "./DataBaseAPI";
import { BaseEntity } from "typeorm/browser";
import type { Entity } from "@entities/types";
import type { DropDownDataObject } from '@types';

class BaseAPI {
  static entity: Entity;
  static typeModelEntity: typeof BaseEntity;
  static modelEntity: BaseEntity = new BaseEntity(); 

  static async create(obj: Omit<typeof this.entity, 'id'>): Promise<typeof this.entity> {
    return <typeof this.entity> await DataBaseAPI.create({ id: Infinity, ...obj }, this.modelEntity);
  }

  static async update(obj: typeof this.entity): Promise<typeof this.entity> {
    return <typeof this.entity> await DataBaseAPI.update(obj, this.modelEntity);
  }

  static async delete(id: number): Promise<boolean> {
    const el = await this.typeModelEntity.findOneById(id);
    return el ? await DataBaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<typeof this.entity | null> {
    return <typeof this.entity> await DataBaseAPI.get(id, this.modelEntity);
  }

  static async getAll(): Promise<Array<typeof this.entity>> {
    return <Array<typeof this.entity>> await DataBaseAPI.getAll(this.modelEntity);
  }

  static async getAllDropDown(): Promise<DropDownDataObject> {
    throw new Error('Method getAllDropDown is not support');
  }

  static async getCount(): Promise<number> {
    return await DataBaseAPI.getCount(this.modelEntity);
  }
}

export default BaseAPI;