import React, { FC, useEffect, useState } from 'react'

import { 
  LoadingScreen,
  AvailableBalance,
  FastExpense
} from '@components'
import { useConvertMoney } from '@hooks';
import { MoneyOperation } from '@helpers';

import DataBase from 'src/Modules/DataBase/DataBase.ts';

let timeOut: NodeJS.Timer | null = null;

const HomePage: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [moneyValue, setMoneyValue] = useState<string>();
  const [balanceDay, setBalanceDay] = useState<number>(0);

  // Переменная хранящая в себе предыдующий баланс для сброса баланса к исходному положению, если не выполнена операция по балансу =>
  const [prevBalance, setPrevBalance] = useState<number>(0);

  // Получение баланса на тек. день =>
  useEffect(() => {
    new DataBase();

    // Временное решение =>
    setTimeout(() => {
      setBalanceDay(850);
      setPrevBalance(850);
      setIsLoaded(true);
    }, 0);
  }, []);

  // Динамическое изменение тек. баланса =>
  useEffect(() => {
    if(timeOut !== null) {
      clearTimeout(timeOut);
    }

    if(moneyValue && moneyValue.length !== 0) {
      timeOut = setTimeout(() => {
        if(!isNaN(Number(moneyValue))) {
          let prevMoneyBalance = MoneyOperation.minus(prevBalance, Number(moneyValue));

          setBalanceDay(prevMoneyBalance);
        }
      }, 200);
    } else {
      setBalanceDay(prevBalance);
    }
  }, [moneyValue]);

  /**
   * Проверяем что пользователь ввел
   */
  function handleChangeText(text: string): void {
    let [, penny] = text.split('.', 2);
    if(penny) {
      if(penny.length <= 2) {
        setMoneyValue(text);
      }
    } else {
      setMoneyValue(text);
    }
  }

  function handleSubmit(): void {
    /**
     * TODO:
     *  - Добавить логику сохранения баланска (backend)
     */
    setMoneyValue('');
  }

  return (
    <LoadingScreen isLoaded={isLoaded}>
      <AvailableBalance />
      <FastExpense />
    </LoadingScreen>
  );
}

export default HomePage