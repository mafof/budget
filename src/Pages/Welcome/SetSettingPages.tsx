/**
 * Экран авторизации (только если подключен к серверу)
 */

import React, { FC } from 'react';
import { 
  Text,
  View,
  StyleSheet
} from 'react-native';

const LoginPage: FC = () => {

  return (
    <View style={styles.container}>
      <Text>Экран установки следующих настроек:</Text>
      <Text>Зарплата (ее кол-во, даты выплат (и ее количество))</Text>
      <Text>Ежемесячные обязательные расходы</Text>
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