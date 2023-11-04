import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm/browser';

import type { CostProduct as EntityCostProduct } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы cost_product, содержащая ценники на продукты с временем момента их ввода (created_at)
 * @description Стурктура таблицы =>
 * operation_id - ID операции
 * product_id - ID продукта
 * integerMoney - Целочисленное значение валюты
 * fractionalMoney - Дробная значение валюты
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('cost_product')
class CostProduct extends BaseEntity implements EntityCostProduct {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne('operation_list', 'costProducts', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'operation_id' })
  operation_id!: number;

  @ManyToOne('product_list', 'costProducts', { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product_id!: number;

  @Column({ default: () => 0 })
  integerMoney!: number;

  @Column({ default: () => 0 })
  fractionalMoney!: number;

  @Column({ nullable: false, default: () => false })
  is_synced?: boolean;

  @Column({ nullable: false, default: () => false })
  is_add_automatic?: boolean;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at?: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at?: number;
}

export default CostProduct;