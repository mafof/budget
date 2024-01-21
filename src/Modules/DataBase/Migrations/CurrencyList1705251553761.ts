/**
 * Начальные данные для таблицы currency_list (список валют)
 */

import { MigrationInterface, QueryRunner } from "typeorm/browser";

class CurrencyList1705251553761 implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<any> {
    if(await queryRunner.hasTable('currency_list')) {
      return await queryRunner.query(`
        INSERT INTO currency_list(code, number, name, nameIntegerCurrency, nameFractionalCurrency)
        VALUES
          ('RUB', 643, 'Российский рубль', 'руб.', 'коп.'),
          ('USD', 840, 'Доллар США', '$', '¢'),
          ('EUR', 978, 'Евро', '€', 'cent');
      `);
    }
  }
  
  async down(queryRunner: QueryRunner): Promise<any> {
    if(await queryRunner.hasTable('currency_list')) {
      return await queryRunner.query(`DELETE FROM currency_list;`);
    }
  }

};

export default CurrencyList1705251553761;