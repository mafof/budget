import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Страница статистики
 */
const StatsPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Привет мир, вы на страницк StatsPage</Text>
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

export default StatsPage;