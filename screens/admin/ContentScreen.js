import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Categories from '../../components/Categories'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ContentScreen = () => {
  const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

  return (
    <SafeAreaView className="bg-white pt-2 h-screen">
      {/* Header */}
      <View className="flex-row pb-2 items-center mx-4 space-x-2 justify-between">
          <Text><Ionicons name="menu" size={24} color="white" /></Text>
          <View className="text-center">
              <Text className="font-semibold text-gray-600 text-lg">Website Content</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="py-2">
              <Text><Ionicons name="md-settings-outline" size={24} color="gray" /></Text>
          </TouchableOpacity>
      </View>

      {/* Area */}
      <ScrollView className="bg-gray-100 pb-10">
        <Categories type="content" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ContentScreen