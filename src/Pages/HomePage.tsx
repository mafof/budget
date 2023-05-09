import React, { FC } from 'react'
import { Text, View } from 'react-native';

const MainPage: FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Главная страница</Text>
    </View>
  );
}

export default MainPage;