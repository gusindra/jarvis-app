import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const LinkCard = ({id, name, data, type="EditLink"}) => {
    const navigation = useNavigation();

    return (
        <View className="flex-row px-3 py-3 items-center justify-between mb-2 bg-white ">
            <View className="flex-row items-center">
                <View className="mr-4">
                    <TouchableOpacity onPress={() => console.log("up")}>
                        <Ionicons name="arrow-up" size={20} color="gray" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("down")}>
                        <Ionicons name="arrow-down" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
                <Text className="font-semibold text-left capitalize text-lg">{data?.name}</Text> 
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(type, {param: data})}>
                <Ionicons name="ios-create-outline" size={24} color="gray" />
            </TouchableOpacity>
        </View>
    )
}

export default LinkCard