/**
 * Компонент "Доступный баланс на день"
 */

import React, { FC, useState, useEffect } from 'react'
import { 
  Text,
  View,
  StyleSheet
} from 'react-native'

import {
  LoadingScreen
} from '@components'

const AvailableBalance: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [balanceDay, setBalanceDay] = useState<number>(0)

  const getStyleBalanceDay = (balance: number) => {
    return balance >= 0 ? balance === 0 ? styles.neutralBalanceText : styles.positiveBalanceText : styles.negativeBalanceText
  }

  // Первичная загрузка экрана =>
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <LoadingScreen isLoaded={isLoaded}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Доступный баланс на день</Text>
        <Text style={getStyleBalanceDay.call(this, balanceDay)}>
          {balanceDay} руб.
        </Text>
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

  positiveBalanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green'
  },

  neutralBalanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange'
  },

  negativeBalanceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }
})

export default AvailableBalance