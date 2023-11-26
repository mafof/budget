/**
 * Входная точка API для сущности "Операция"
 * @see {@link Operation} Сущность "Операция"
 */

import BaseAPI from "./BaseAPI";
import type { Operation } from "@entities/types";
import { OperationList } from "@entities";

class OperationAPI {

  static async create(obj: Omit<Operation, 'id'>): Promise<Operation> {
    return <Operation> await BaseAPI.create({ id: Infinity, ...obj }, (new OperationList()));
  }

  static async update(obj: Operation): Promise<Operation> {
    return <Operation> await BaseAPI.update(obj, (new OperationList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await OperationList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Operation | null> {
    return <Operation> await BaseAPI.get(id, (new OperationList()));
  }

  static async getAll(): Promise<Array<Operation>> {
    return <Array<Operation>> await BaseAPI.getAll((new OperationList()));
  }

  static async getCount(): Promise<number> {
    return await BaseAPI.getCount((new OperationList()));
  }
}

export default OperationAPI;