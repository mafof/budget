/**
 * Общая страница, для страниц первоначальной настройки приложения
 */

import React, { FC } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import {
  WelcomeLoginPage,
  WelcomeCreateWalletPage
} from '@pages';

const Stack = createStackNavigator();

const WelcomePage: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: 'transparent'
        },
        headerTransparent: true,
        headerTitle: '',
        
        gestureEnabled: true,
        gestureDirection: 'vertical'
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={WelcomeLoginPage} />
      <Stack.Screen name="CreateWallet" component={WelcomeCreateWalletPage} />
    </Stack.Navigator>
  );
}

export default WelcomePage;