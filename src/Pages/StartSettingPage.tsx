import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/**
 * Страница первоначальных настроек
 */
const StartSettingPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Привет мир, вы на страницк StartSettingPage</Text>
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

export default StartSettingPage;