import type Entity from "./Entity";

/**
 * Сущность "Кошелек"
 * Описание свойств =>
 * name - Наименование кошелька
 * currency_id - ID Валюты
 * is_default - Кошелек по умолчанию
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 */
type Wallet = Entity & {
  name: string;
  currency_id: number;
  is_default?: boolean;
  is_synced?: boolean;
  is_add_automatic?: boolean;
}

export default Wallet;