import { Entity, Column, BaseEntity, PrimaryGeneratedColumn, OneToMany } from 'typeorm/browser';

import type OperationList from './OperationList';
import type { IShop } from '@entities/types';

/**
 * Таблица реализующая структуру таблицы shop_list, содержащая список магазинов
 * @description Стурктура таблицы =>
 * name - Наименование магазина
 * is_sync - Добавлена ли запись автоматически при синхронизации с чеком ФНС
 * created_at - Время создания
 * updated_at - Время обновления
 */
@Entity('shop_list')
class ShopList extends BaseEntity implements IShop {
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

  @OneToMany('operation_list', 'shop_id')
  operations!: OperationList[];
}

export default ShopList;