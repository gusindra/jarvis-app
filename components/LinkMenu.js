import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons  } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const LinkMenu = ({icon, text, link, type}) => {
    const navigation = useNavigation();

    return (
        <View>
            {(type=="screen")?(
                <TouchableOpacity onPress={() => navigation.navigate(link)}>
                    <View className="flex-row justify-between items-center bg-white p-4 mb-1">
                        <View className="flex-row items-center">
                            <Ionicons name={icon} size={24} color="gray" />
                            <Text className="mx-2 py-2 text-gray-600">{text}</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="lightgray" />
                    </View>
                </TouchableOpacity>
            ):(
                <TouchableOpacity onPress={() => Linking.openURL(link)}>
                    <View className="flex-row justify-between items-center bg-white p-4 mb-1">
                        <View className="flex-row items-center">
                            <Ionicons name={icon} size={24} color="gray" />
                            <Text className="mx-2 py-2 text-gray-600">{text}</Text>
                        </View>
                        <MaterialIcons name="keyboard-arrow-right" size={24} color="lightgray" />
                    </View>
                </TouchableOpacity>
            )
            }
        </View>
    )
}

export default LinkMenu