import React, { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, ActivityIndicator } from 'react-native'

interface LoadingScreenProps {
  isLoaded: Boolean,
  children: ReactNode
}

const LoadingScreen: FC<LoadingScreenProps> = (props) => {
  return (
    <>
    {
      props.isLoaded
      ?
      props.children
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
  isLoaded: PropTypes.bool.isRequired
}

export default LoadingScreen