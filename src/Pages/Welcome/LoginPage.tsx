/**
 * Экран авторизации (только если подключен к серверу)
 */

import React, { FC } from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Button
} from '@rneui/themed';

import { useNavigation } from '@react-navigation/native';

const LoginPage: FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Экран авторизации</Text>
      <Button
        title='123'
        type="solid"
        onPress={() => { navigation.navigate('CreateWallet', {})  }}
      />
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

export default LoginPage;