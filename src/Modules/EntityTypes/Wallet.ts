import type Entity from "./Entity";
import type Currency from "./Currency";

/**
 * Сущность "Кошелек"
 * Описание свойств =>
 * name - Наименование кошелька
 * currency - ID Валюты
 * is_default - Кошелек по умолчанию
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Wallet = Entity & {
  name: string;
  currency: Currency;
  is_default?: boolean;
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default Wallet;