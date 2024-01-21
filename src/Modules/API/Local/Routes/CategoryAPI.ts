/**
 * Входная точка API для сущности "Категории"
 * @see {@link Category} Сущность "Категории"
 */

import BaseAPI from "../BaseAPI";
import DataBaseAPI from "./../DataBaseAPI";
import type { Category } from "@entities/types";
import { CategoryList } from "@entities";
import type { DropDownDataObject } from '@types';

class CategoryAPI extends BaseAPI {
  static entity: Category;
  static typeModelEntity: typeof CategoryList;
  static modelEntity: CategoryList = new CategoryList();

  static async getAllDropDown(): Promise<DropDownDataObject> {
    return <DropDownDataObject> await DataBaseAPI.getAllDropDown({ id: 'id', value: 'name' }, (new CategoryList()));
  }
}

export default CategoryAPI;