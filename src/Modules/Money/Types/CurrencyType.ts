/**
 * Тип "Валюта"
 * @description Сущность "Валюта", описывает подробности валюты (его код, номер, наименование и т.п.),
 * но при этом, сущность не связана с балансом, за это отвечает другой тип данных MoneyType
 * @see MoneyType
 * 
 * @param {string} code - Код валюты
 * @param {number} number - Номер валюты
 * @param {string} title - Человеческое наименование валюты
 * @param {string} nameIntegerCurrency - Человечкское наименование целочисленной части валюты
 * @param {string} nameFractionalCurrency - Человечесоке наименование дробной часть валюты
 */

type CurrencyType = {
  code: string,
  number: number,
  title: string,
  nameIntegerCurrency: string
  nameFractionalCurrency?: string,
}

export default CurrencyType;