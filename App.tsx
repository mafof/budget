import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { 
  MainPage,
  OperationListPage,
  StatsPage,
  SettingPage,
  StartSettingPage
} from '@pages';
import { OpaqueColorValue } from 'react-native';

import { Migration } from '@db';

const Tab = createBottomTabNavigator();

interface ISettingIcon {
  route: any,
  focused: boolean,
  color: string | OpaqueColorValue | undefined,
  size: number | undefined
}

export default function App() {

  // Проводим миграцию данных =>
  useEffect(() => {
    const migration = new Migration();
    migration.migrateRun();
  }, []);

  function getIcon({ route, focused, color, size }: ISettingIcon) {
    let iconName: any;
    route = route.route;

    switch(route.name) {
      case 'Главная':
        iconName = focused
        ? 'md-home'
        : 'md-home-outline'
      break;
      case 'Операции':
        iconName = focused
        ? 'md-list'
        : 'md-list-outline'
      break;
      case 'Статистика':
        iconName = focused
        ? 'md-stats-chart'
        : 'md-stats-chart-outline'
      break;
      case 'Настройки':
        iconName = focused
        ? 'md-settings'
        : 'md-settings-outline'
      break;
    }

    return <Ionicons name={iconName} size={size} color={color} />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(route) => ({ tabBarIcon: ({focused, color, size}) => getIcon({route, focused, color, size}) })}
      >
        <Tab.Screen name="Главная" component={MainPage} />
        <Tab.Screen name="Операции" component={OperationListPage} />
        <Tab.Screen name="Статистика" component={StatsPage} />
        <Tab.Screen name="Настройки" component={SettingPage} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
