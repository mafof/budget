/**
 * Экран приветствия
 * 1 - ый экран, который нужен для создание кошелька
 */

import React, { FC } from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native'

const CreateWalletPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Экран приветствия, 1 экран</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

export default CreateWalletPage;