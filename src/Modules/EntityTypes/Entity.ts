/**
 * Базовый интерфейс описывающий все поля, присущие всем сущностям
 * Описание свойств =>
 * id - Первичный ключ
 * created_at - Время создания записи
 * updated_at - Время обновления записи
 */
type Entity = {
  id: number;
  created_at?: number;
  updated_at?: number;
}

export default Entity;