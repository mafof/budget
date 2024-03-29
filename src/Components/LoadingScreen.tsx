/**
 * Компонент "Загрузка экрана"
 */

import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

interface LoadingScreenProps {
  isLoaded: boolean,
  children: ReactNode
}

const LoadingScreen: FC<LoadingScreenProps> = ({isLoaded, children}) => {
  return (
    <>
    {
      isLoaded
      ?
      children
      :
      <View style={styles.container}>
        <ActivityIndicator size='large' />
      </View>
    }
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

LoadingScreen.propTypes = {
  isLoaded: PropTypes.bool.isRequired, 
  children: PropTypes.node.isRequired
}

export default LoadingScreen