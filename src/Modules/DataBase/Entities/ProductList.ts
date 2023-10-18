import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type CostProduct from './CostProduct';
import type { IProduct } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы product_list, содержащая наименования всех продуктов
 * @description Стурктура таблицы =>
 * name - Наименование продукта (является уникальным ключом)
 * is_sync - Добавлена ли запись автоматически при синхронизации с чеком ФНС
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('product_list')
class ProductList extends BaseEntity implements IProduct {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: false })
  name!: string;

  @Column({ nullable: false, default: () => false })
  is_sync?: Boolean

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('cost_product', 'product')
  costProducts!: CostProduct[];
}

export default ProductList;