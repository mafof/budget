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

  },

  mode: 'dark'
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