import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type OperationList from './OperationList';

/**
 * Таблица реализующая структуру таблицы category_list, содержащая список категорий
 * @description Стурктура таблицы =>
 * name - Наименование категории
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('category_list')
class CategoryList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  created_at!: number;

  @Column({ default: () => "strftime('%s','now') || substr(strftime('%f','now'),4)" })
  updated_at!: number;

  @OneToMany('operation_list', 'category_id')
  operations!: OperationList[]
}

export default CategoryList;