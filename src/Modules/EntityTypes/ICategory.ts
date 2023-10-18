/**
 * Описание сущности "Категория операции"
 */

import type IBaseEntity from "./IBaseEntity";

interface ICategory extends IBaseEntity {
  name: string;
}

export default ICategory;