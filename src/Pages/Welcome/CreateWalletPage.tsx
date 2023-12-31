/**
 * Экран создания кошелька
 */

import React, { FC, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';

import { 
  Text,
  View,
  StyleSheet
} from 'react-native';

import {
  Button,
  useTheme
} from '@rneui/themed';

import { 
  TextInput,
  DropDownInput
} from '@components';

const CreateWalletPage: FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);

  const changeNextButton = () => {
    //navigation.navigate('CreateWallet');
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },

    containerWelcome: {
      maxHeight: 110,
      marginTop: 15
    },
  
    containerBody: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      marginTop: 100,
      padding: 16
    },

    containerInput: {
      flex: 1,
      padding: 16
    },
  
    textWelcome: {
      fontSize: 20,
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 15,
      color: theme.colors.text
    },

    textWelcome2: {
      fontSize: 17,
      fontStyle: 'normal',
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.colors.text
    },
    
    textBody: {
      fontSize: 15,
      textAlign: 'center',
      color: theme.colors.text
    },

    containerButton: {
      paddingTop: 20
    },

    iconButtonNext: {
      marginBottom: 3
    },

    buttonNext: {
      width: 50,
      height: 50
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerWelcome}>
        <Text style={styles.textWelcome}>Начальная настройка</Text>
      </View>

      <View style={styles.containerBody}>
        <Text style={styles.textBody}>Создайте ваш первый кошелек</Text>

        {/* <TextInput
          placeholder='Логин'
          iconName='account'
          onChange={(val: string) => { console.log(val) }}
        />
        
        <TextInput
          placeholder='Пароль'
          typeInput='password'
          iconName='form-textbox-password'
          onChange={(val: string) => { console.log(val) }}
        /> */}

        <Button
          icon={<Icon name="arrow-right-bold" size={50} style={styles.iconButtonNext} />}
          type="solid"
          color="success"
          style={styles.buttonNext}
          containerStyle={styles.containerButton}
          loadingStyle={styles.buttonNext}
          radius={100}
          loading={isLoadingBtn}
          onPress={changeNextButton}
        />
      </View>

      <Toast />
    </View>
  );
}

export default CreateWalletPage;