/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactElement, useState, useEffect } from 'react'
import { OpaqueColorValue, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { 
  HomePage,
  OperationListPage,
  StatsPage,
  SettingPage,
  WelcomeCreateWalletPage
} from '@pages'

import DataBase from '@modules/database';
import { WalletAPI } from '@api';
import { LoadingScreen } from '@components';

interface IBaseSettingIcon {
  color: string | OpaqueColorValue | undefined,
  size: number | undefined
}

interface ISettingIcon extends IBaseSettingIcon {
  route: any
}

const Tab = createBottomTabNavigator()

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
      setIsShowWelcomePage(await WalletAPI.getCount() === 0);

      setIsLoaded(true);
    }

    initGlobalVariable();
  }, []);

  const getIcon = ({ route, color, size }: ISettingIcon): ReactElement<Icon> => {
    let iconName: any;
    route = route.route;

    switch (route.name) {
      case 'Главная':
        iconName = 'home'
        break;
      case 'Операции':
        iconName = 'list-alt'
        break;
      case 'Статистика':
        iconName = 'data-usage'
        break;
      case 'Настройки':
        iconName = 'settings'
        break;
    }

    return <Icon name={iconName} size={size} color={color} />
  }

  const onPressChangeProfile = () => {
    Alert.alert('Заголовок', 'Здесь будет функционал смены аккаунтов')
  }

  const onPressSearch = () => {
    Alert.alert('Заголовок', 'Здесь будет функционал глобального поиска')
  }

  const options: BottomTabNavigationOptions = {
    headerLeft: () => (
      <Icon
        name="account-circle"
        size={30}
        style={style.profileIcon}
        onPress={onPressChangeProfile}
      />
    ),

    headerRight: () => (
      <Icon
        name="search"
        size={30}
        style={style.searchIcon}
        onPress={onPressSearch}
      />
    ),
  }

  return (
    <LoadingScreen isLoaded={isLoaded}>
      {
        isShowWelcomePage ? 
          <WelcomeCreateWalletPage /> 
        :
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={(route: any) => ({ tabBarIcon: (baseSettingIcon: IBaseSettingIcon) => getIcon({ route, ...baseSettingIcon }) })}
            >

              <Tab.Screen
                name='Главная'
                component={HomePage}
                options={options}
              />

              <Tab.Screen
                name='Операции'
                component={OperationListPage}
                options={options}
              />

              <Tab.Screen
                name='Статистика'
                component={StatsPage}
                options={options}
              />

              <Tab.Screen
                name='Настройки'
                component={SettingPage}
                options={options}
              />

            </Tab.Navigator>
          </NavigationContainer>
      }
    </LoadingScreen>
  )
}

const style = StyleSheet.create({
  profileIcon: {
    marginLeft: 10
  },

  searchIcon: {
    marginRight: 10
  }
})

export default App