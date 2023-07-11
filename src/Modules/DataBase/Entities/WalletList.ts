import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm/browser';

import type OperationList from './OperationList';

/**
 * Таблица реализующая структуру таблицы wallet_list, содержащая список кошельков
 * @description Стурктура таблицы =>
 * name - Наименование кошелька
 * currency - валюта (по умолчанию RUB)
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

  @Column({ default: () => "'RUB'" })
  currency!: string;

  @Column({ default: () => false })
  is_default!: boolean

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('operation_list', 'wallet_id')
  operations!: OperationList[];
}

export default WalletList;