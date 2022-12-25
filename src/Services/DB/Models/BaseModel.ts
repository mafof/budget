import DataBase from '../DataBase';

// Тип для переменной класса
type typeOfAttributeField = { [s: string]: any }

/**
 * Базовый класс модели
 */
abstract class BaseModel extends DataBase {
  /** Наименование таблицы */
  protected abstract tableName: string;

  /** Список полей */
  protected attributeField: typeOfAttributeField = {};

  constructor(attributeField: typeOfAttributeField) {
    super();

    this.attributeField = attributeField;
  }

  /**
   * Получение всех записей с возможностью вставки объекта WHERE
   * @param {string | null} where - Строка с условиями WHERE оператора
   * @param {Array<any>} params - 
   */
  public getAll(where: string | null = null, params: Array<any> = []) {
  }

  public get(id: number | string) {

  }

  public save(): Boolean {
    return true;
  }

  public remove(): Boolean {
    return true;
  }

  private whereOperation(where: Object) {
    const operationList = {
      eq: '=',
      neq: '<>',
      lt: '<',
      lteq: '<=',
      gt: '>',
      gteq: '>=',
      cont: 'LIKE'
    };
    let resWhere: string | null = null;

    for(let key in where) {
      
    }

    return resWhere;
  }
}

export default BaseModel;