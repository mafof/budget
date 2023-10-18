import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm/browser';

import type ProductList from './ProductList';
import type OperationList from './OperationList';

import type { ICostProduct } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы cost_product, содержащая ценники на продукты с временем момента их ввода (created_at)
 * @description Стурктура таблицы =>
 * operation - ID операции
 * product - ID продукта
 * money - Кол-во рублей/долларов/евро/... (стоимость в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (стоимость в данной операции)
 * is_sync - Добавлена ли запись автоматически при синхронизации с чеком ФНС
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('cost_product')
class CostProduct extends BaseEntity implements ICostProduct {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne('operation_list', 'costProducts', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'operation_id' })
  operation!: OperationList;

  @ManyToOne('product_list', 'costProducts', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product!: ProductList;

  @Column({ default: () => 0 })
  money!: number;

  @Column({ default: () => 0 })
  penny!: number;

  @Column({ nullable: false, default: () => false })
  is_sync?: Boolean

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;
}

export default CostProduct;