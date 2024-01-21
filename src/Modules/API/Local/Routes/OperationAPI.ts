/**
 * Входная точка API для сущности "Операция"
 * @see {@link Operation} Сущность "Операция"
 */

import BaseAPI from "../BaseAPI";
import type { Operation } from "@entities/types";
import { OperationList } from "@entities";

class OperationAPI extends BaseAPI {
  static entity: Operation;
  static typeModelEntity: typeof OperationList;
  static modelEntity: OperationList = new OperationList();
}

export default OperationAPI;