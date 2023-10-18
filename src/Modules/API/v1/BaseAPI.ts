/**
 * Базовый класс реализации API приложения
 * @description
 * Данный базовый класс должны наследовать абсолютно все дочерние классы, в нем реализованы все стандартные операции над данными,
 * допускается создание дополнительных методов в классе потомков
 */

class BaseAPI { 
  create(obj: object) {
    throw new Error('123');
  }

  update(obj: object, id: number) {
    throw new Error('123');
  }

  delete(id: number): boolean {
    throw new Error('123');
  }
}

export default BaseAPI;