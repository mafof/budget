import type Entity from "./Entity";

import type ProductList from "./Product";
import type Operation from "./Operation";

/**
 * Сущность "Цена продукта"
 * Описание свойств =>
 * operation - ID операции
 * product - ID продукта
 * money - Кол-во рублей/долларов/евро/... (стоимость в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (стоимость в данной операции)
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type CostProduct = Entity & {
  operation: Operation;
  product: ProductList;
  money: number;
  penny: number;
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default CostProduct;