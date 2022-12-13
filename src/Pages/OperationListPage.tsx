import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Страница с списком операций
 */
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