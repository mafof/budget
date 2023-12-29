/**
 * Экран авторизации (только если подключен к серверу)
 */

import React, { FC, useState, useEffect } from 'react';
import { useTheme } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TextInput } from '@components';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Button
} from '@rneui/themed';

const LoginPage: FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();

  const changeNextButton = () => {
    if(login && password) {

    } else {
      navigation.navigate('CreateWallet', {})
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    containerWelcome: {
      maxHeight: 110,
      marginTop: 15
    },
  
    containerBody: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 100,
      padding: 16
    },

    containerInput: {
      flex: 1,
      padding: 16
    },
  
    textWelcome: {
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
      color: theme.colors.text
    },

    textWelcome2: {
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.colors.text
    },
    
    textBody: {
      fontSize: 15,
      textAlign: 'center',
      color: theme.colors.text
    },

    containerButton: {
      paddingTop: 20
    },

    iconButtonNext: {
      marginBottom: 3
    },

    buttonNext: {
      paddingTop: 20,
      width: 50,
      height: 50
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerWelcome}>
        <Text style={styles.textWelcome}>Начальная настройка</Text>

        <Text style={styles.textWelcome2}>Добро пожаловать.</Text>
        <Text style={styles.textWelcome2}>Настройте приложение для дальнейшего его использования</Text>
      </View>

      <View style={styles.containerBody}>
        <Text style={styles.textBody}>Авторизируйтесь или пропустите этот шаг</Text>
        
        <TextInput 
          label="Логин"
          value={login}
          iconName="account"
          onChange={(v: string) => { setLogin(v) }}
        />

        <TextInput 
          label="Пароль"
          value={password}
          mode="password"
          iconName="form-textbox-password"
          onChange={(v: string) => { setPassword(v) }}
        />

        <Button
          icon={<Icon name="arrow-right-bold" size={50} style={styles.iconButtonNext} />}
          type="solid"
          color="success"
          style={styles.buttonNext}
          containerStyle={styles.containerButton}
          loadingStyle={styles.buttonNext}
          radius={100}
          loading={false}
          onPress={changeNextButton}
        />
      </View>
    </View>
  );
}

export default LoginPage;