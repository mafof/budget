import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type CostProduct from './CostProduct';
import type { Product } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы product_list, содержащая наименования всех продуктов
 * @description Стурктура таблицы =>
 * name - Наименование продукта (является уникальным ключом)
 * is_synced - Синхронизирована ли запись с сервисом ФНС
 * is_add_automatic - Добавлен ли элемент автоматически (системой)
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('product_list')
class ProductList extends BaseEntity implements Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true, nullable: false })
  name!: string;

  @Column({ nullable: false, default: () => false })
  is_synced?: boolean;

  @Column({ nullable: false, default: () => false })
  is_add_automatic?: boolean;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at?: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at?: number;

  @OneToMany('cost_product', 'product')
  costProducts!: CostProduct[];
}

export default ProductList;