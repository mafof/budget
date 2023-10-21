import type Entity from "./Entity";

/**
 * Сущность "Магазин"
 * Описание свойств =>
 * name - Наименование магазина
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Shop = Entity & {
  name: string;
  is_synced?: boolean;
  is_add_automatic?: boolean;
};

export default Shop;