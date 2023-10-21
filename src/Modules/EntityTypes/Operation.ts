import type Entity from "./Entity";

import type Wallet from "./Wallet";
import type Category from "./Category";
import type Shop from "./Shop";

/**
 * Сущность "Операция"
 * Описание свойств =>
 * type - Тип операции (0 - расход, 1 - доход)
 * money - Кол-во рублей/долларов/евро/... (в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (в данной операции)
 * wallet - ID Кошелька
 * category - ID Категории
 * shop - ID магазина
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Operation = Entity & {
  type: number;
  money: number;
  penny: number;
  wallet: Wallet;
  category?: Category;
  shop?: Shop;
  is_synced?: boolean;
  is_add_automatic?: boolean;
};

export default Operation;