/**
 * Базовый интерфейс описывающий все поля, присущие всем сущностям
 */

interface IBaseEntity {
  id: number;
  
  created_at?: number;
  updated_at?: number;
}

export default IBaseEntity;