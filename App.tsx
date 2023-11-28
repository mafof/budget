import React, { FC, useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';

import { 
  WelcomeCreateWalletPage
} from '@pages';

import { Navigation } from '@components';

import DataBase from '@modules/database';
import { WalletAPI } from '@api';
import { LoadingScreen } from '@components';

const theme = createTheme({
  lightColors: {
    primary: 'red',
  },
  darkColors: {
    primary: 'blue',
  },
  mode: 'light'
})

const App: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isShowWelcomePage, setIsShowWelcomePage] = useState<boolean>(false);

  useEffect(() => {
    const initGlobalVariable = async () => {
      // Создаем соединение с БД =>
      const db = DataBase.getInstance();
      if(!db.database.isInitialized) {
        await db.database.initialize();
      }

      // Отображаем экран приветствия, если не найдено кошельков =>
      setIsShowWelcomePage(await WalletAPI.getCount() === 1);

      setIsLoaded(true);
    }

    initGlobalVariable();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <LoadingScreen isLoaded={isLoaded}>
        { isShowWelcomePage ? <WelcomeCreateWalletPage /> : <Navigation /> }
      </LoadingScreen>
    </ThemeProvider>
  )
}

export default App