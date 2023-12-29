/**
 * Компонент поля типа текст/пароль
 */

import React, { FC, useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@rneui/themed';
import { TextInput as Input } from 'react-native-element-textinput';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IPropsTextInput {
  value?: string,
  textError?: string | null,
  mode?: 'default' | 'numeric' | 'password',
  label: string,
  iconName?: string | null,
  errorText?: string,
  onChange: Function
}

const TextInput: FC<IPropsTextInput> = ({value, textError = null, onChange, label, iconName = null, mode = 'default'}: IPropsTextInput) => {
  const { theme } = useTheme();
  const [error, setError] = useState<string | null>(textError);

  useEffect(() => {
    setError(textError);
  }, [textError]);

  const styles = StyleSheet.create({
    input: {
      marginTop: 10,
      height: 55,
      paddingHorizontal: 12,
      borderRadius: 8,
      borderWidth: 0.2,
      borderBottomColor: error ? theme.colors.red : theme.colors.grey3,
      borderLeftColor: error ? theme.colors.red : theme.colors.grey3,
      borderRightColor: error ? theme.colors.red : theme.colors.grey3,
      borderTopColor: error ? theme.colors.red : theme.colors.grey3
    },

    inputStyle: { 
      fontSize: 16,
      color: theme.colors.text
    },

    labelStyle: {
      fontSize: 14,
      position: 'absolute',
      top: -10,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 4,
      color: theme.colors.grey3,
      marginLeft: -4,
    },

    placeholderStyle: { 
      color: error ? theme.colors.red : theme.colors.grey3,
      fontSize: 16 
    },

    textErrorStyle: {
      alignSelf: 'flex-start',
      marginLeft: 5,
      marginTop: 5,
      textAlign: 'left',
      fontSize: 10
    },

    iconStyle: {
      paddingRight: 10,
      color: error ? theme.colors.red : theme.colors.grey3
    }
  });

  return (
    <Input 
      value={value}
      mode={mode === 'numeric' ? 'default' : mode}
      label={label}
      onChangeText={text => {
        setError(null);
        onChange(text);
      }}
      focusColor={theme.colors.blue}
      renderRightIcon={() => null}
      renderLeftIcon={() => iconName ? <Icon name={iconName} size={20} style={styles.iconStyle} /> : null}
      keyboardType={mode === 'numeric' ? 'numeric' : 'default'}
      textError={error || ''}

      style={styles.input}
      inputStyle={styles.inputStyle}
      labelStyle={styles.labelStyle}
      placeholderStyle={styles.placeholderStyle}
      textErrorStyle={styles.textErrorStyle}
    />
  );
};

export default TextInput;