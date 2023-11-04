import type Entity from "./Entity";

/**
 * Сущность "Операция"
 * Описание свойств =>
 * type - Тип операции (0 - расход, 1 - доход)
 * integerMoney - Целочисленное значение валюты
 * fractionalMoney - Дробная значение валюты
 * wallet_id - ID Кошелька
 * category_id - ID Категории
 * shop_id - ID магазина
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Operation = Entity & {
  type: number;
  integerMoney: number;
  fractionalMoney: number;
  wallet_id: number;
  category_id?: number;
  shop_id?: number;
  is_synced?: boolean;
  is_add_automatic?: boolean;
};

export default Operation;