/**
 * Главная страница
 */

import react, { FC, useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import LoadingScreenPage from './LoadingScreenPage';

import { useConvertMoney } from 'hooks';
import { MoneyOperation } from 'helpers'; 

let timeOut: NodeJS.Timer | null = null;

const MainPage: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [moneyValue, setMoneyValue] = useState<string>();
  const [balanceDay, setBalanceDay] = useState<number>(0);
  const [prevBalance, setPrevBalance] = useState<number>(0); // Переменная для сброса баланса к исходному положению, если не выполнена операция по балансу

  // Получение баланса на тек. день =>
  useEffect(() => {
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
   * @deprecated
   */
  function handleChangeText(text: string): void {
    setMoneyValue(text);
  }

  function handleSubmit(): void {
    setMoneyValue('');
  }

  return (
    <>
    {isLoaded 
      ?
      <View style={styles.container}>
          <Text style={styles.titleText}>Доступный баланс на день</Text>
          <Text 
            style={{
              ...styles.balanceText,
              color: (balanceDay > 0)
              ? 'green'
              : (balanceDay == 0)
                ? 'orange'
                : 'red'
            }}
          >
            <>
              {useConvertMoney(balanceDay)}
            </>
          </Text>

          <TextInput 
            style={styles.input}
            onChangeText={handleChangeText}
            onSubmitEditing={handleSubmit}
            value={moneyValue}
            keyboardType='decimal-pad'
            placeholder='Введите сумму'
            autoFocus={true}
          />
      </View>
      :
      <LoadingScreenPage />
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  balanceText: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  input: {
    width: '90%',
    textAlign: 'center',
    height: 40,
    borderBottomWidth: 1,
    marginTop: 10
  },
});

export default MainPage;