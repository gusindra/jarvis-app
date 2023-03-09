import { View, Text, TouchableOpacity, Switch } from 'react-native'
import React from 'react'

const SwitchMenu = ({text, desc, ...props}) => {
  return (
        <View className="flex-row justify-between items-center bg-white p-4 mt-2 mx-1">
            <View className="flex">
                <Text className="py-1 text-gray-600 font-semibold">{text}</Text>
                <Text className="py-1 text-xs text-gray-500">{desc}</Text>
            </View>
            <TouchableOpacity onPress={() => console.log(text)}>
                <Switch {...props} />
            </TouchableOpacity>
        </View>
  )
}

export default SwitchMenu