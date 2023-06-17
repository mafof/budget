/**
 * Тип "Валюта"
 * @description Сущность "Валюта", описывает подробности валюты (его код, номер, наименование и т.п.),
 * но при этом, сущность не связана с балансом, за это отвечает другой тип данных MoneyType
 * @see MoneyType
 * 
 * @param {String} code - Код валюты
 * @param {Number} number - Номер валюты
 * @param {String} title - Человеческое наименование валюты
 * @param {String} nameIntegerCurrency - Человечкское наименование целочисленной части валюты
 * @param {String} nameFractionalCurrency - Человечесоке наименование дробной часть валюты
 */

type CurrencyType = {
  code: String,
  number: Number,
  title: String,
  nameIntegerCurrency: String
  nameFractionalCurrency?: String,
}

export default CurrencyType;