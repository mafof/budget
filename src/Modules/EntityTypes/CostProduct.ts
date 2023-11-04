import type Entity from "./Entity";

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
  operation_id: number;
  product_id: number;
  integerMoney: number
  fractionalMoney?: number,
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default CostProduct;