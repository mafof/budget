/**
 * Комопнент для ввода текста/пароля/чисел
 */

import React, { FC, useState, useRef } from 'react';
import {
   View,
   TextInput as ReactNativeTextInput,
   Text,
   StyleSheet
} from 'react-native';
import { useTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type val = string | null;
type typeInput = 'text' | 'password' | 'number' ;

interface IPropsTextInput {
  onChange: Function,
  typeInput?: typeInput,
  defaultValue?: val,
  placeholder?: string,
  disabled?: boolean,
  iconName?: string,
  textError?: string
};

const TextInput: FC<IPropsTextInput> = ({ onChange, typeInput = 'text', defaultValue = null, placeholder, disabled = false, iconName, textError }: IPropsTextInput) => {
  const { theme } = useTheme();
  const inputSearchRef = useRef<ReactNativeTextInput | null>(null);

  const [value, setValue] = useState<val>(defaultValue);
  const [focusable, setFocusable] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    setValue(text);
    onChange(text);
  };

  const onClearText = () => {
    setValue(null);
    inputSearchRef.current?.blur();
    onChange(null);
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
          ref={inputSearchRef}
          disableFullscreenUI={true}
          value={value == null ? undefined : value}
          placeholder={placeholder}
          placeholderTextColor={disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.input}
          focusable={focusable}
          secureTextEntry={typeInput === 'password'}
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

      {textError &&
        <Text style={styles.textError}>{textError}</Text>
      }
    </>
  );
};

export default TextInput;