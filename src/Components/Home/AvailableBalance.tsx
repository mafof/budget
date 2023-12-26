/**
 * Компонент "Доступный баланс на день"
 */

import React, { FC, useState, useEffect } from 'react';
import { useTheme } from '@rneui/themed';
import { 
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  Button
} from '@rneui/themed';

import {
  LoadingScreen
} from '@components';

const AvailableBalance: FC = () => {
  const { theme } = useTheme();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [balanceDay, setBalanceDay] = useState<number>(0);
  const [changeInterval, setChangeInterval] = useState<number>(1);

  const getStyleBalanceDay = (balance: number) => {
    return balance >= 0 ? balance === 0 ? styles.neutralBalanceText : styles.positiveBalanceText : styles.negativeBalanceText;
  }

  // Первичная загрузка экрана =>
  useEffect(() => {
    setBalanceDay(100);
    setIsLoaded(true);
  }, [])

  const interval: Object = {
    1: {
      value: 1,
      text: 'На день'
    },
    2: {
      value: 2,
      text: 'На неделю'
    },
    3: {
      value: 3,
      text: 'На месяц'
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'flex-start',
      width: '85%',
      height: 115,
      maxHeight: 115,
      backgroundColor: theme.colors.card,
      marginTop: 69,
      padding: 10,
      borderRadius: 10
    },
  
    text: {
      fontSize: 20,
      color: '#FFFFFF',
      fontStyle: 'normal',
      fontWeight: 'bold'
    },

    buttonChangeInterval: {
      padding: 0
    },

    textChangeInterval: {
      color: theme.colors.blue,
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 'bold'
    },
  
    positiveBalanceText: {
      paddingTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'green'
    },
  
    neutralBalanceText: {
      paddingTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'orange'
    },
  
    negativeBalanceText: {
      paddingTop: 10,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
    }
  })

  return (
    <LoadingScreen isLoaded={isLoaded}>
      <View style={styles.container}>
        <Text style={styles.text}>Доступный баланс</Text>
        <Button 
          title={interval[changeInterval].text}
          type="clear"
          titleStyle={styles.textChangeInterval}
          buttonStyle={styles.buttonChangeInterval}
        />
        <Text style={getStyleBalanceDay.call(this, balanceDay)}>
          {balanceDay} руб.
        </Text>
      </View>
    </LoadingScreen>
  );
}

export default AvailableBalance