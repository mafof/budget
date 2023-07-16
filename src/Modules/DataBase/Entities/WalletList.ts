import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn } from 'typeorm/browser';

import type OperationList from './OperationList';
import type CurrencyList from './CurrencyList';

/**
 * Таблица реализующая структуру таблицы wallet_list, содержащая список кошельков
 * @description Стурктура таблицы =>
 * name - Наименование кошелька
 * currency - ID Валюты
 * is_default - Кошелек по умолчанию
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('wallet_list')
class WalletList extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @ManyToOne('currency_list', 'wallets', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'currency_id' })
  currency!: CurrencyList;

  @Column({ nullable: false, default: () => false })
  is_sync!: Boolean

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('operation_list', 'wallet_id')
  operations!: OperationList[];
}

export default WalletList;