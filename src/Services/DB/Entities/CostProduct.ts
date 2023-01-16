import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm/browser';

import ProductList from './ProductList';

/**
 * Таблица реализующая структуру таблицы cost_product, содержащая ценники на продукты с временем момента их ввода (created_at)
 * @description Стурктура таблицы =>
 * product_id - ID продукта
 * money - Кол-во рублей/долларов/евро/... (стоимость в данной операции)
 * penny - Кол-во копеек/центов/евро цент/... (стоимость в данной операции)
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('cost_product')
class CostProduct extends BaseEntity {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => ProductList, product => product.costProducts)
  product!: ProductList;

  @Column({ default: () => "0" })
  money!: number;

  @Column({ default: () => "0" })
  penny!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;
}

export default CostProduct;