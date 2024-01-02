/**
 * Комопнент для ввода через список
 */

import React, { FC, useState } from 'react';
import {
  View,
  FlatList,
  TextInput as ReactNativeTextInput,
  Text,
  StyleSheet
} from 'react-native';
import { useTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type val = string | undefined;

interface IPropsDropDownInput {
  onChange: Function,
  defaultValue?: val,
  placeholder?: string,
  disabled?: boolean,
  iconName?: string,
  textError?: string
};

const DropDownInput: FC<IPropsDropDownInput> = ({ onChange, defaultValue, placeholder, disabled = false, iconName, textError }: IPropsDropDownInput) => {
  const { theme } = useTheme();

  const [value, setValue] = useState<val>(defaultValue);
  const [focusable, setFocusable] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    setValue(text);
    onChange(text);
  };

  const onClearText = () => {
    setValue(undefined);
    setFocusable(false);    
    onChange('');
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 'auto',
      minWidth: '100%',
      height: 50,
      maxHeight: 50,
      marginTop: 10,
      justifyContent: 'flex-start'
    },

    input: {
      height: 50,
      maxHeight: 50,
      paddingHorizontal: 0,
      fontSize: 16,

      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: disabled ? theme.colors.inputDisable : textError ? theme.colors.error : focusable ? theme.colors.inputFocus : theme.colors.input,

      paddingLeft: iconName ? 35 : 5,
      paddingRight: 5,
      color: theme.colors.text
    },

    textError: {
      display: 'flex',
      alignSelf: 'flex-start',
      color: theme.colors.inputError
    },

    icon: {
      position: 'absolute',
      paddingLeft: 5,
      paddingTop: 12,
      color: disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.input,
    },

    iconFunctionality: {
      position: 'absolute',
      alignSelf: 'flex-end',
      paddingTop: 14,
      paddingRight: 5,
      color: theme.colors.text
    },

    containerList: {
      marginTop: 5,
      minHeight: 40,
      maxHeight: 200,

      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: theme.colors.input
    },

    containerItemList: {
      minWidth: '100%',
      borderBottomWidth: 0.5,
      borderColor: theme.colors.input
    },

    itemListText: {
      padding: 10,
    }
  });

  return (
    <>
      <View style={styles.container}>
        {iconName &&
          <Icon
            name={iconName}
            size={25}
            style={styles.icon}
          />
        }

        <ReactNativeTextInput
          disableFullscreenUI={true}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.input}
          focusable={focusable}
          editable={!disabled}
          numberOfLines={1}
          maxLength={28}
          style={styles.input}
          onFocus={() => { setFocusable(true) }}
          onBlur={() => { setFocusable(false) }}
          onChangeText={onChangeText}
        />

        {value &&
          <Icon
            name="close"
            size={25}
            style={styles.iconFunctionality}
            onPress={onClearText}
          />
        }
      </View>

      <FlatList
        style={styles.containerList}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps='always'

        data={[
          { id: 1, value: '1-ый элемент' },
          { id: 2, value: '2-ой элемент' },
          { id: 3, value: '3-ий элемент' },
          { id: 4, value: '4-ий элемент' },
          { id: 5, value: '5-ий элемент' },
          { id: 6, value: '6-ий элемент' },
        ]}

        renderItem={({ item }) => (
          <View style={styles.containerItemList}>
            <Text style={styles.itemListText}>{ item.value }</Text>
          </View>
        )}
      />

      {textError &&
        <Text style={styles.textError}>{textError}</Text>
      }
    </>
  );
};

export default DropDownInput;