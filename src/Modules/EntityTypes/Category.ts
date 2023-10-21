import type Entity from "./Entity";

/**
 * Сущность "Категория операции"
 * Описание свойств =>
 * name - Наименование категории
 */
type Category = Entity & {
  name: string;
}

export default Category;