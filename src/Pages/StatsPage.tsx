import React, { FC } from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

const StatsPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Статистика</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default StatsPage