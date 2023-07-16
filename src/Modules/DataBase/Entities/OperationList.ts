import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, ManyToOne, JoinColumn } from 'typeorm/browser';
import { Max } from 'class-validator';

import type WalletList from './WalletList';
import type CategoryList from './CategoryList';
import type CostProduct from './CostProduct';
import type ShopList from './ShopList';

/**
 * Таблица реализующая структуру таблицы operation_list, содержащая все операции по счету
 * @description Стурктура таблицы =>
 * create_type - Тип создания валюты (0 - создана пользователем, 1 - создана автоматически через скан QR кода)
 * type - Тип операции (0 - расход, 1 - доход)
 * money - Кол-во рублей/долларов/евро/... (в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (в данной операции)
 * wallet - ID Кошелька
 * category - ID Категории
 * shop - ID магазина
 * is_sync - Добавлена ли запись автоматически при синхронизации с чеком ФНС
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('operation_list')
class OperationList extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, default: () => 0 })
  @Max(1)
  create_type!: number;
  
  @Column({ nullable: false })
  @Max(1)
  type!: number;
  
  @Column({ nullable: false, default: () => "0" })
  money!: number;

  @Column({ nullable: false, default: () => "0" })
  penny!: number;

  @ManyToOne('wallet_list', 'operations', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'wallet_id' })
  wallet!: WalletList;

  @ManyToOne('category_list', 'operations', { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'category_id' })
  category!: CategoryList;

  @ManyToOne('shop_list', 'operations', { nullable: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'shop_id' })
  shop!: ShopList;

  @Column({ nullable: false, default: () => false })
  is_sync!: Boolean

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;
  
  @OneToMany('cost_product', 'operation_id')
  costProducts!: CostProduct[];
}

export default OperationList;