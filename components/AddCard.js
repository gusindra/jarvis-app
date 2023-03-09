import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const AddCard = ({text, iconName, link}) => {
    const navigation = useNavigation();

    return (
      <TouchableOpacity  onPress={() => navigation.navigate(link)}>
          <View className="flex-row justify-between items-center bg-white p-4 mt-2 mx-1">
                  <View className="flex-row space-x-2">
                      <Ionicons name={iconName} size={24} color="gray" />
                      <Text className="py-1 text-gray-600 font-semibold">{text}</Text>
                  </View>
                  <Ionicons name="add" size={20} color="lightgray" />
          </View>
      </TouchableOpacity>
    )
}

export default AddCard