import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CategoryCard = ({imgUrl, title, link}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="bg-white mx-1 my-1" onPress={() => navigation.navigate(link)}>
        <Image source={{
            uri: imgUrl,
        }} 
        className="h-36 w-80 rounded object-scale-down" />
      <Text className="absolute bottom-2 left-2 text-white font-bold text-lg">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard