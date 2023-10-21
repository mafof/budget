import type Entity from "./Entity";

/**
 * Сущность "Продукт"
 * Описание свойств =>
 * name - Наименование категории
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Product = Entity & {
  name: string;
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default Product;