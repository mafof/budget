/**
 * Домашняя страница
 */

import React, { FC } from 'react';
import { 
  View,
  StyleSheet
} from 'react-native';

import { 
  AvailableBalance,
  FastExpense
} from '@components';

const HomePage: FC = () => {
  return (
    <View style={styles.container}>
      <AvailableBalance />
      <FastExpense />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})

export default HomePage;