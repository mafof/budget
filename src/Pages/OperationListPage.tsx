/**
 * Страница с списком операций
 */

import react, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const OperationListPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Привет мир, вы на странице OperationListPage</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OperationListPage;