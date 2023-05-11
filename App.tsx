import React, { FC, ReactElement } from 'react'
import { OpaqueColorValue } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Icon from 'react-native-vector-icons/MaterialIcons'
import { HomePage } from '@pages'

const Tab = createBottomTabNavigator();

interface IBaseSettingIcon {
  focused: boolean,
  color: string | OpaqueColorValue | undefined,
  size: number | undefined
}

interface ISettingIcon extends IBaseSettingIcon {
  route: any
}

const App: FC = () => {
  const getIcon = ({ route, focused, color, size }: ISettingIcon): ReactElement<Icon> => {
    let iconName: any;
    route = route.route;

    switch(route.name) {
      case 'Главная':
        iconName = 'home'
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

    return <Icon name={iconName} size={size} color={color} />
  }

  const options: BottomTabNavigationOptions = {
    headerLeft: () => (
      <Icon
        name="account-circle"
        size={30}
        style={{ marginLeft: 10 }}
        onPress={() => alert('Здесь будет функционал смены аккаунтов')}
      />
    ),

    headerRight: () => (
      <Icon
        name="search"
        size={30}
        style={{ marginRight: 10 }}
        onPress={() => alert('Здесь будет функционал глобального поиска')}
      />
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={(route: any) => ({ tabBarIcon: (baseSettingIcon: IBaseSettingIcon) => getIcon({route, ...baseSettingIcon}) })}
      >
        <Tab.Screen 
          name="Главная"
          component={HomePage}
          options={options} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App