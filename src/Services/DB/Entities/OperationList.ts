import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm/browser';
import { Max } from 'class-validator';

import WalletList from './WalletList';

/**
 * Таблица реализующая структуру таблицы operation_list, содержащая все операции по счету
 * @description Стурктура таблицы =>
 * create_type - Тип создания валюты (0 - создана пользователем, 1 - создана автоматически через скан QR кода)
 * type - Тип операции (0 - расход, 1 - доход)
 * money - Кол-во рублей/долларов/евро/... (в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (в данной операции)
 * wallet_id - Кошелек
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('operation_list')
class OperationList extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Max(1)
  create_type!: number;
  
  @Column()
  @Max(1)
  type!: number;
  
  @Column({ default: () => "0" })
  money!: number;

  @Column({ default: () => "0" })
  penny!: number;

  @ManyToOne(() => WalletList, wallet => wallet.operations)
  @JoinColumn({ name: 'wallet_id' })
  wallet!: WalletList;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;
}

export default OperationList;