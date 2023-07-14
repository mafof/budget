import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type WalletList from './WalletList';

/**
 * Таблица реализующая структуру таблицы currency_list, содержащая список валют
 * @description Стурктура таблицы =>
 * code - Код валюты (строковый)
 * number - Номер валюты (числовой)
 * name - Наименование валюты
 * nameIntegerCurrency - Человечкское наименование целочисленной части валюты
 * nameFractionalCurrency - Человечесоке наименование дробной часть валюты
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('currency_list')
class CurrencyList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  code!: string;

  @Column()
  number!: number;

  @Column()
  name!: string;

  @Column()
  nameIntegerCurrency!: string;

  @Column({ nullable: true, default: () => null })
  nameFractionalCurrency!: string;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('wallet_list', 'currency_id')
  wallets!: WalletList[]
}

export default CurrencyList;