/**
 * Экран загрузки
 */
import react, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native';

const LoadingScreenPage: FC = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default LoadingScreenPage;

