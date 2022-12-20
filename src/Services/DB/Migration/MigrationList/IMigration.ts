/**
 * Интерфейс для всех классов миграций
 */
interface IMigration {
  /**
   * Метод выполненяющий миграцию
   */
  run(): Promise<void>;

  /**
   * Метод удаляющий миграцию
   */
  down(): Promise<void>;
}

export default IMigration