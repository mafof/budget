import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm/browser';

/**
 * Таблица реализующая структуру таблицы settings, содержащая список настроек приложения
 * @description Стурктура таблицы =>
 * key - ключ настройки
 * value - значение настройки
 */
@Entity('setting_list')
class SettingList extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false, unique: true })
  key!: string;

  @Column({ nullable: true })
  value!: string;
}

export default SettingList;