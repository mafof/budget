import type Entity from "./Entity";

/**
 * Сущность "Настройка"
 * Описание свойств =>
 * key - ключ настройки
 * value - значение настройки
 */
type Setting = Entity & {
  key: string;
  value?: string;
}

export default Setting;