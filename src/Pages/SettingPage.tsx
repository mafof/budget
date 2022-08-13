/**
 * Страница настроек
 */

import react, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SettingPage: FC = () => {
  return (
    <View style={styles.container}>
      <Text>Привет мир, вы на странице SettingPage</Text>
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

export default SettingPage;