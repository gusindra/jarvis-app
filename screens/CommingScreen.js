import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const CommingScreen = () => {
  return (
    <View className="flex-1 items-center justify-center">
        <Animatable.View className="pt-1" animation="pulse" easing="linear" iterationCount="infinite">
            <FontAwesome5 name="fly" size={145} color="gray" />
        </Animatable.View>
        <Text className="text-base my-6 text-center text-slate-600">Comming Soon</Text>
    </View>
  )
}

export default CommingScreen