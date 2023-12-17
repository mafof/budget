import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn } from 'typeorm/browser';
import { Max } from 'class-validator';

import type CostProduct from './CostProduct';

import type { Operation } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы operation_list, содержащая все операции по счету
 * @description Стурктура таблицы =>
 * type - Тип операции (0 - расход, 1 - доход)
 * integerMoney - Целочисленное значение валюты
 * fractionalMoney - Дробная значение валюты
 * wallet_id - ID Кошелька
 * category_id - ID Категории
 * shop_id - ID магазина
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('operation_list')
class OperationList extends BaseEntity implements Operation {

  @PrimaryGeneratedColumn()
  id!: number;
  
  @Column({ nullable: false })
  @Max(1)
  type!: number;

  @Column({ nullable: false, default: () => "0" })
  integerMoney!: number;

  @Column({ nullable: false, default: () => "0" })
  fractionalMoney!: number;

  @ManyToOne('wallet_list', 'operations', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'wallet_id' })
  wallet_id!: number;

  @ManyToOne('category_list', 'operations', { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'category_id' })
  category_id?: number;

  @ManyToOne('shop_list', 'operations', { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'shop_id' })
  shop_id?: number;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_synced?: boolean;

  @Column({ nullable: false, type: 'boolean', default: false })
  is_add_automatic?: boolean;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at?: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at?: number;
  
  @OneToMany('cost_product', 'operation_id')
  costProducts!: CostProduct[];
}

export default OperationList;