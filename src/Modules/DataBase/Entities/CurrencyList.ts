import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type WalletList from './WalletList';
import type { Currency } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы currency_list, содержащая список валют
 * @description Стурктура таблицы =>
 * code - Код валюты (строковый)
 * number - Номер валюты (числовой)
 * name - Наименование валюты
 * nameIntegerCurrency - Человечкское наименование целочисленной части валюты (сокращенно)
 * nameFractionalCurrency - Человечесоке наименование дробной часть валюты (сокращенно)
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('currency_list')
class CurrencyList extends BaseEntity implements Currency {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, unique: true })
  code!: string;

  @Column({ nullable: false, unique: true })
  number!: number;

  @Column({ nullable: false, unique: true })
  name!: string;

  @Column({ nullable: false })
  nameIntegerCurrency!: string;

  @Column({ nullable: true, default: () => null })
  nameFractionalCurrency?: string;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('wallet_list', 'currency_id')
  wallets!: WalletList[]
}

export default CurrencyList;