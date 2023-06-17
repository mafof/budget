/**
 * Компонент "Доступный баланс на день"
 */

import React, { FC } from 'react'
import { 
  Text,
  View,
  StyleSheet
} from 'react-native'

const AvailableBalance: FC = () => {
  const getStyleBalanceDay = (balance: number) => {
    return balance >= 0 ? balance === 0 ? styles.neutralBalanceText : styles.positiveBalanceText : styles.negativeBalanceText
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Доступный баланс на день</Text>
      <Text style={getStyleBalanceDay.call(this, 0)}>
        {0} руб.
      </Text>
    </View>
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