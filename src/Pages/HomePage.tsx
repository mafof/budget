import React, { FC, useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { LoadingScreen } from '@components'

const HomePage: FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  return (
    <LoadingScreen isLoaded={isLoaded}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Главная страница</Text>
      </View>
    </LoadingScreen>
  );
}

export default HomePage