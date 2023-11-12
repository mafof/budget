/**
 * Интерфейс для описания стандартных методов всех входных точек API
 */

import { Entity } from "@entities/types";

interface IBaseAPI {
  create(obj: Entity): Promise<Entity>;
  update(obj: Entity): Promise<Entity>;
  delete(id: number): Promise<boolean>;
  get(id: number): Promise<Entity | null>;
}

export default IBaseAPI;