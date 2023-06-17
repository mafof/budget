/**
 * Тип "Валюта"
 * @description Описывает тип сущности "Валюта"
 */

type CurrencyType = {
  code: String,
  number: Number,
  title: String,
  integerCurrency: String,
  fractionalCurrency?: String,
}

export default CurrencyType;