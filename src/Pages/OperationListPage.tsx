import React, { FC } from 'react'
import { 
  View,
  Text,
  StyleSheet
} from 'react-native'

const OperationListPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Список операций</Text>
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

export default OperationListPage