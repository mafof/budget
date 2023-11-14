/**
 * Входная точка API для сущности "Категории"
 * @see {@link Category} Сущность "Категории"
 */

import BaseAPI from "./BaseAPI";
import type { Category } from "@entities/types";
import { CategoryList } from "@entities";

class CategoryAPI {

  static async create(obj: Omit<Category, 'id'>): Promise<Category> {
    return <Category> await BaseAPI.create({ id: Infinity, ...obj }, (new CategoryList()));
  }

  static async update(obj: Category): Promise<Category> {
    return <Category> await BaseAPI.update(obj, (new CategoryList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await CategoryList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Category | null> {
    return <Category> await BaseAPI.get(id, (new CategoryList()));
  }
}

export default CategoryAPI;