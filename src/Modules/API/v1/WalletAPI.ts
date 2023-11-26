/**
 * Входная точка API для сущности "Кошельки"
 * @see {@link Wallet} Сущность "Кошельки"
 */

import BaseAPI from "./BaseAPI";
import type { Wallet } from "@entities/types";
import { WalletList } from "@entities";

class WalletAPI {

  static async create(obj: Omit<Wallet, 'id'>): Promise<Wallet> {
    return <Wallet> await BaseAPI.create({ id: Infinity, ...obj }, (new WalletList()));
  }

  static async update(obj: Wallet): Promise<Wallet> {
    return <Wallet> await BaseAPI.update(obj, (new WalletList()));
  }

  static async delete(id: number): Promise<boolean> {
    const el = await WalletList.findOneBy({ id });
    return el ? await BaseAPI.delete(el) : true;
  }

  static async get(id: number): Promise<Wallet | null> {
    return <Wallet> await BaseAPI.get(id, (new WalletList()));
  }

  static async getAll(): Promise<Array<Wallet>> {
    return <Array<Wallet>> await BaseAPI.getAll((new WalletList()));
  }

  static async getCount(): Promise<number> {
    return await BaseAPI.getCount((new WalletList()));
  }
}

export default WalletAPI;