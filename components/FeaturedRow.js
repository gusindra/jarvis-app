import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({id, title, description}) => {
  return (
    <View>
        <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="font-bold text-xs rounded bg-gray-300 p-2">&rarr;</Text>
        </View>
        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        <ScrollView horizontal contentContainerStyle={{
            paddingHorizontal:15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4">
            <RestaurantCard
                id= {1}
                imgUrl= "https://links.papareact.com/wru"
                title="Testing"
                rating={4.5}
                genre="Indonesia"
                address="Street 123"
                short_description="Test short description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id= {1}
                imgUrl= "https://links.papareact.com/wru"
                title="Testing"
                rating={4.5}
                genre="Indonesia"
                address="Street 123"
                short_description="Test short description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id= {1}
                imgUrl= "https://links.papareact.com/wru"
                title="Testing"
                rating={4.5}
                genre="Indonesia"
                address="Street 123"
                short_description="Test short description"
                dishes={[]}
                long={20}
                lat={0}
            />
            <RestaurantCard
                id= {1}
                imgUrl= "https://links.papareact.com/wru"
                title="Testing"
                rating={4.5}
                genre="Indonesia"
                address="Street 123"
                short_description="Test short description"
                dishes={[]}
                long={20}
                lat={0}
            />
        </ScrollView>
    </View>
  )
}

export default FeaturedRow