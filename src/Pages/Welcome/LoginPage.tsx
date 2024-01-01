/**
 * Экран авторизации (только если подключен к серверу)
 */

import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import { Formik } from 'formik';

import {
  Text,
  View,
  ScrollView,
  StyleSheet
} from 'react-native';

import {
  Button,
  useTheme
} from '@rneui/themed';

import { TextInput } from '@components';

const LoginPage: FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

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
      width: 50,
      height: 50
    }
  });

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={false}>
        <View style={styles.containerWelcome}>
          <Text style={styles.textWelcome}>Начальная настройка</Text>

          <Text style={styles.textWelcome2}>Добро пожаловать.</Text>
          <Text style={styles.textWelcome2}>Настройте приложение для дальнейшего его использования</Text>
        </View>

        <View style={styles.containerBody}>
          <Text style={styles.textBody}>Авторизируйтесь или пропустите этот шаг</Text>
          
          <Formik
            initialValues={{ login: '', password: '' }}
            onSubmit={(values) => {
              if(values.login && values.password) {
                Toast.show({
                  type: 'error',
                  text1: 'Ошибка аунтетификации',
                  text2: 'Функционал не готов, пожалуйста перезагрузите приложение'
                })
              } else {
                navigation.navigate('CreateWallet');
              }
            }}
          >
            {({ values, errors, handleChange, handleSubmit }) => (
              <>
                <TextInput 
                  placeholder="Логин"
                  defaultValue={values.login}
                  iconName="account"
                  textError={errors.login}
                  onChange={handleChange('login')}
                />

                <TextInput 
                  placeholder="Пароль"
                  defaultValue={values.password}
                  typeInput="password"
                  iconName="form-textbox-password"
                  onChange={handleChange('password')}
                />

                <Button
                  icon={<Icon name="arrow-right-bold" size={50} style={styles.iconButtonNext} />}
                  type="solid"
                  color="success"
                  style={styles.buttonNext}
                  containerStyle={styles.containerButton}
                  loadingStyle={styles.buttonNext}
                  radius={100}
                  loading={isLoadingBtn}
                  onPress={handleSubmit}
                />
              </>
            )}
          </Formik>
        </View>

        <Toast />
      </ScrollView>
    </View>
  );
}

export default LoginPage;