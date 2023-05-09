import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { HomePage } from '@pages';
import { Button } from 'react-native';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Main"
          component={HomePage}
          options={{
            headerTitleAlign: 'center',
            headerTitle: 'Главная',
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Поиск"
              />
            )
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}