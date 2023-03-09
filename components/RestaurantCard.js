import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const RestaurantCard = ({ 
    imgUrl,
    title,
    rating,
    genre,
    address, 
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
        <Image source={{
                uri: imgUrl,
            }}
            className="h-36 w-64 rounded-sm"
        />
        <View className="px-3 pb-4">
            <Text className="font-bold text-lg pt-2">{title}</Text>
            <View className="flex-row items-center space-x-1">
                <Text className="text-green-500 opacity-60 text-lg">&#9733;</Text>
                <Text className="text-xs text-gray-500"><Text className="text-green-500">{rating}</Text> . {genre}</Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Text className="text-gray-400 opacity-80 text-lg">&#9906;</Text>
                <Text className="text-xs text-gray-500">Nearby . {address}</Text>
            </View>
        </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard