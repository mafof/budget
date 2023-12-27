import React, { FC, useState, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Toast from 'react-native-toast-message';
import { ThemeProvider, createTheme } from '@rneui/themed';

import { LoadingScreen, Navigation } from '@components';
import DataBase from '@modules/database';
import { WalletAPI } from '@api';

const theme = createTheme({
  lightColors: {
    background: '#FFFFFF',
    card: '#FFFFFF',
    iconsCard: '#808080',
    changePartCard: '#46A3FF',
    text: '#000000',

    white: '#FFFFFF',
    grey0: '#F1F1F1',
    grey1: '#E3E3E3',
    grey2: '#ADADAD',
    grey3: '#808080',
    grey4: '#575757',
    grey5: '#282828',
    black: '#000000',
    red: '#FF827E',
    green: '#00C096',
    blue: '#46A3FF'
  },
  darkColors: {
    background: '#0C1017',
    card: '#12161F',
    iconsCard: '#ADADAD',
    changePartCard: '#46A3FF',
    text: '#E3E3E3',
    
    white: '#FFFFFF',
    grey0: '#F1F1F1',
    grey1: '#E3E3E3',
    grey2: '#ADADAD',
    grey3: '#808080',
    grey4: '#575757',
    grey5: '#282828',
    black: '#000000',
    red: '#E45651',
    green: '#00A682',
    blue: '#46A3FF'
  },

  mode: 'dark'
})

const App: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isShowWelcomePage, setIsShowWelcomePage] = useState<boolean>(false);

  const requestPermissionFolder = async () => {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch(err) {
      Toast.show({
        type: 'error',
        text1: 'Ошибка получения прав',
        text2: 'Ошибка при проверки прав'
      });

      return false;
    }
  };

  useEffect(() => {
    const initGlobalVariable = async () => {
      // Проверка прав =>
      await requestPermissionFolder();

      // Создаем соединение с БД =>
      const db = DataBase.getInstance();
      if(!db.database.isInitialized) {
        await db.database.initialize();
        if(!await db.firstSynchronize()) {
          Toast.show({
            type: 'error',
            text1: 'Ошибка инцилизации БД',
            text2: 'Пожалуйста, свяжитесь с администратором'
          });
        }
      }

      // Отображаем экран приветствия, если не найдено кошельков =>
      setIsShowWelcomePage(await WalletAPI.getCount() === 0);
      setIsLoaded(true);
    }

    initGlobalVariable();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LoadingScreen isLoaded={isLoaded}>
        <Navigation isShowWelcomePage={isShowWelcomePage} />
      </LoadingScreen>
      <Toast />
    </ThemeProvider>
  )
}

export default App