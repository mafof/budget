/**
 * Комопнент для ввода через список
 */

import React, { FC, useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  TextInput as ReactNativeTextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import { useTheme } from '@rneui/themed';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { BaseAPI } from '@api';

import type { 
  DataObject,
  DropDownDataObject
} from '@types';

type val = number | null;
type text = string | undefined;

interface IPropsDropDownInput {
  data?: DropDownDataObject,
  api?: typeof BaseAPI,
  onChange: Function
  defaultValue?: val,
  placeholder?: string,
  disabled?: boolean,
  iconName?: string,
  textError?: string
};

const DropDownInput: FC<IPropsDropDownInput> = ({ data, api, onChange, defaultValue = null, placeholder, disabled = false, iconName, textError }: IPropsDropDownInput) => {
  const { theme } = useTheme();
  const inputSearchRef = useRef<ReactNativeTextInput | null>(null);

  // Данные для выбора из пропаса data =>
  const [_data, _setData] = useState<DropDownDataObject>(data || [])
  
  // Данные для выбора после поиска =>
  const [findedData, setFindedData] = useState<DropDownDataObject>(_data);

  const [val, setVal] = useState<val>(defaultValue);
  const [textSearch, setTextSearch] = useState<text>();
  const [focusable, setFocusable] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(api === undefined)

  const onChangeSearch = (text: string) => {
    setTextSearch(text);
    if(text.length === 0) {
      setFindedData(_data);
    } else {
      setFindedData(_data.filter((el: DataObject) => el.value.toLowerCase().includes(text.toLowerCase())));
    }
  };

  const onChangeElement = ({ id, value }: DataObject) => {
    setTextSearch(value);
    setVal(id);
    inputSearchRef.current?.blur();

    onChange(id);
  }

  const onClearText = () => {
    if(!disabled) {
      setVal(null);
      setTextSearch(undefined);
      setFindedData(_data);
      inputSearchRef.current?.blur();
      onChange(null);
    }
  };

  const notFound = (isNotFoundData : boolean) => {
    return (
      <View style={styles.containerListNotFound}>
        <Text style={styles.textNotFound}>{ isNotFoundData ? 'Элементы отсутствуют' : 'Ничего не найдено' }</Text>
      </View>
    );
  }

  // Обработчик ID =>
  useEffect(() => {
    if(val) {
      const finded: DataObject | undefined = _data.find((el: DataObject) => el.id === val);
      setTextSearch(finded?.value || undefined);
    } else {
      setTextSearch(undefined);
    }
  }, [val, _data, data, api]);

  // Заполнение данных (При наличие API) =>
  useEffect(() => {
    const getElements = async () => {
      if(!api) throw new Error('Not found param api');
      setIsLoaded(false);
      const res = await api.getAllDropDown();
      _setData(res);
      setFindedData(res);
      setIsLoaded(true);
    }

    if(!api && !data) {
      throw new Error('Not found param data or api to DropdDownInput element');
    }

    if(api && !data) {
      getElements();
    }
  }, [api, data])

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
      color: disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.text
    },

    hiddenInput: {
      position: 'absolute',
      width: 0,
      height: 0
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
      color: disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.text
    },

    containerFlatList: {
      position: 'absolute',
      top: 95,
      zIndex: 1,
      elevation: 1
    },

    containerList: {
      marginTop: 5,
      minHeight: 40,
      maxHeight: 200,
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: theme.colors.input,
      backgroundColor: theme.colors.background
    },

    containerListNotFound: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100%',
      marginTop: 5,
      minHeight: 40,
      maxHeight: 200,
      borderWidth: 0.5,
      borderRadius: 8,
      borderColor: theme.colors.input,
      backgroundColor: theme.colors.background
    },

    textNotFound: {
      color: theme.colors.red
    },

    containerItemList: {
      minWidth: '100%',
      borderTopWidth: 0.5,
      borderColor: theme.colors.input
    },

    containerFistItemList: {
      minWidth: '100%'
    },

    itemListText: {
      color: theme.colors.text,
      padding: 10,
    }
  });

  return (
    <>
      {
        isLoaded ?
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
              value={textSearch}
              placeholder={placeholder}
              placeholderTextColor={disabled ? theme.colors.inputDisable : textError ? theme.colors.error : theme.colors.input}
              focusable={focusable}
              editable={!disabled}
              numberOfLines={1}
              maxLength={28}
              style={styles.input}
              onFocus={() => { setFocusable(true) }}
              onBlur={() => { setFocusable(false) }}
              onChangeText={onChangeSearch}
            />

            {textSearch ?
                <Icon
                  name="close"
                  size={25}
                  style={styles.iconFunctionality}
                  onPress={onClearText}
                />
              :
                <Icon
                  name="menu-down"
                  size={25}
                  style={styles.iconFunctionality}
                />
            }
          </View>
        :
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      }
      
      {focusable &&
        <View style={styles.containerFlatList}>
          {
            _data.length > 0 && findedData.length > 0 &&
              <ScrollView
                style={styles.containerList}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='always'
              >
                {findedData.map((item: DataObject, _index: number) => (
                  <TouchableOpacity 
                    style={ _index === 0 ? styles.containerFistItemList : styles.containerItemList }
                    key={item.id}
                    onPress={() => onChangeElement(item)}
                  >
                    <Text style={styles.itemListText}>{ item.value }</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
          }

          { findedData.length === 0 && notFound(_data.length === 0) }
        </View>
      }

      {textError &&
        <Text style={styles.textError}>{textError}</Text>
      }
    </>
  );
};

export default DropDownInput;