import type Entity from "./Entity";

import type ProductList from "./Product";
import type Operation from "./Operation";

/**
 * Сущность "Цена продукта"
 * Описание свойств =>
 * operation - ID операции
 * product - ID продукта
 * integerMoney - Целочисленное значение валюты
 * fractionalMoney - Дробная значение валюты
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type CostProduct = Entity & {
  operation: Operation;
  product: ProductList;
  integerMoney: number
  fractionalMoney?: number,
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default CostProduct;