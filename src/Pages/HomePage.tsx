import React, { FC, useEffect, useState } from 'react'
import { 
  Text,
  TextInput,
  View,
  Pressable,
  StyleSheet
} from 'react-native'

import { LoadingScreen } from '@components'
import { useConvertMoney } from '@hooks';
import { MoneyOperation } from '@helpers';

let timeOut: NodeJS.Timer | null = null;

const HomePage: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [moneyValue, setMoneyValue] = useState<string>();
  const [balanceDay, setBalanceDay] = useState<number>(0);

  // Переменная хранящая в себе предыдующий баланс для сброса баланса к исходному положению, если не выполнена операция по балансу =>
  const [prevBalance, setPrevBalance] = useState<number>(0);

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
          />

          <View style={styles.container}>
            <Text style={styles.textQRCode}>
              ИЛИ
            </Text>
            
            <View style={styles.containerButtonQRCode}>
              <Pressable 
                style={styles.buttonQRCode}
                android_ripple={{borderless: true, color: '#1c84d5'}}
              >
                {/* <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" /> */}
                <Text style={styles.textButtonQRCode}>Отсканировать QR код</Text>
              </Pressable>
            </View>
          </View>
      </View>
    </LoadingScreen>
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

  textQRCode: {
    fontSize: 15,
    marginTop: 25,
    marginBottom: 25
  },

  containerButtonQRCode: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 25,
    overflow: 'hidden'
  },

  buttonQRCode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: '#2296f3'
  },

  textButtonQRCode: {
    color: 'white',
    paddingLeft: 10
  }
});

export default HomePage