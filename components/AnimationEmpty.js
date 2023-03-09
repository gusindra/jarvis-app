import { View, Text } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';

const AnimationEmpty = () => {
  return (
    <View>
        <Lottie source={require('../assets/animation/search.json')} autoPlay loop />
    </View>
  )
}

export default AnimationEmpty