/**
 * Компонент навигации во всем приложении (нижняя панель приложения)
 */

/* eslint-disable react/no-unstable-nested-components */
import React, { FC, ReactElement } from 'react';
import { OpaqueColorValue, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { useTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { 
  HomePage,
  OperationListPage,
  StatsPage,
  SettingPage,
  WelcomePage
} from '@pages';

interface IBaseSettingIcon {
  color: string | OpaqueColorValue | undefined,
  size: number | undefined
}

interface ISettingIcon extends IBaseSettingIcon {
  route: any
}

interface IPropsNavigation {
  isShowWelcomePage: boolean
}

const Tab = createBottomTabNavigator();

const Navigation: FC<IPropsNavigation> = ({ isShowWelcomePage }: IPropsNavigation) => {
  const { theme } = useTheme();

  const getIcon = ({ route, color, size }: ISettingIcon): ReactElement<Icon> => {
    let iconName: any;
    route = route.route;

    switch (route.name) {
      case 'Главная':
        iconName = 'home';
        break;
      case 'Счета':
        iconName = 'account-balance-wallet';
        break;
      case 'Операции':
        iconName = 'list-alt';
        break;
      case 'Статистика':
        iconName = 'data-usage';
        break;
      case 'Настройки':
        iconName = 'settings';
        break;
    }

    return <Icon name={iconName} size={size} color={color} />;
  }

  const onPressChangeProfile = () => {
    Alert.alert('Заголовок', 'Здесь будет функционал смены аккаунтов');
  }

  const onPressSearch = () => {
    Alert.alert('Заголовок', 'Здесь будет функционал глобального поиска');
  }

  const options: BottomTabNavigationOptions = {
    headerTitleAlign: 'center',
    tabBarActiveTintColor: theme.colors.changePartCard,

    headerLeft: () => (
      <Icon
        name="account-circle"
        size={30}
        style={{
          color: theme.colors.iconsCard,
          ...style.profileIcon
        }}
        onPress={onPressChangeProfile}
      />
    ),

    headerRight: () => (
      <Icon
        name="search"
        size={30}
        style={{
          color: theme.colors.iconsCard,
          ...style.searchIcon
        }}
        onPress={onPressSearch}
      />
    ),
  }

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme.colors.background, // Бекграунд всех экранов
          card: theme.colors.card, // Верх и низ бекграунд цвета
          text: theme.colors.text, // Заголовок экрана

          primary: theme.colors.primary,
          border: theme.colors.black,
          notification: theme.colors.white
        },
        dark: theme.mode === 'dark'
      }}
    >
      {
        isShowWelcomePage ? 
          <WelcomePage />
        :
          <Tab.Navigator
            screenOptions={(route: any) => ({
              tabBarIcon: (baseSettingIcon: IBaseSettingIcon) => getIcon({ route, ...baseSettingIcon }),
              tabBarActiveTintColor: theme.colors.changePartCard,
              tabBarInactiveTintColor: theme.colors.iconsCard
            })}
          >
            <Tab.Screen
              name='Главная'
              component={HomePage}
              options={options}
            />

            <Tab.Screen
              name='Счета'
              component={OperationListPage}
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
      }
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  profileIcon: {
    marginLeft: 10
  },

  searchIcon: {
    marginRight: 10
  }
});

export default Navigation;