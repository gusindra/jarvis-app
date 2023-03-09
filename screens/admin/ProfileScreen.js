import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import LinkMenu from '../../components/LinkMenu'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const ProfileScreen = () => {
    const navigation = useNavigation();
    useEffect(()=>{
        getUser();
    }, []);

    const getUser = () => {
        try{
            AsyncStorage.getItem('logUser').then(value => {
                console.log("logUser", value); 
            });
        }catch(error){
            console.log(error);
        }
    }
    const userLogout = () => {
        try{
            AsyncStorage.removeItem('logUser');
            AsyncStorage.removeItem('auth');
            navigation.navigate('Login')
        }catch(error){
            console.log(error);
        }
    }

    return (
        <View>
            <ScrollView className="bg-gray-100 pb-10">
                {/* Header Profile */}
                <View className="flex items-center ">
                    <View className="mt-10 mb-3 bg-slate-50 rounded-full p-3">
                        <Image source={{
                        uri: "https://s3.ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/frontend/version/2/New/jarvis-store-logo-black.png",
                        }}
                        className="h-20 w-56 px-4 rounded-full"
                        />
                    </View>
                    <View className="mb-10 items-center">
                        <Text className="font-bold text-xl">Gusindra</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("General")}>
                            <Text>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Link */}
                <View>
                    <Text></Text>
                    <LinkMenu icon="ios-help-buoy-outline" text="Help & Support" link="https://jarvisstore.freshdesk.com/support/home" />
                    <LinkMenu icon="help-circle-outline" text="FAQ" link="https://jarvisstore.freshdesk.com/support/solutions/folders/1000223125" />
                    <LinkMenu icon="notifications-outline" text="Notifikasi" />
                    <TouchableOpacity>
                        <View className="flex-row justify-between items-center bg-white p-4 mb-1">
                            <View className="flex-row items-center">
                                <MaterialCommunityIcons name="theme-light-dark" size={24} color="gray" />
                                <Text className="mx-2 py-2 text-gray-600">Dark Mode</Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="lightgray" />
                        </View>
                    </TouchableOpacity>
                    <Text></Text>
                    <LinkMenu icon="md-book-outline" text="Term" link="https://jarvis-store.com/kebijakan?service=1&version=2" />
                    <LinkMenu icon="md-book-outline" text="Privacy" link="https://jarvis-store.com/kebijakan?privacy=1&version=2" />
                    <LinkMenu icon="ios-information-circle-outline" text="Jarvis Store" link="https://jarvis-store.com" />
                    <Text></Text>
                    <LinkMenu icon="log-out-outline" text="Log Out" link="Login" type="screen"/>
                    <TouchableOpacity onPress={()=>userLogout()}>
                        <View className="flex-row justify-between items-center bg-white p-4 mb-1">
                            <View className="flex-row items-center">
                                <Ionicons name="log-out-outline" size={24} color="gray" />
                                <Text className="mx-2 py-2 text-gray-600">Log Out</Text>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" size={24} color="lightgray" />
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Footer Profile */}
                <View className="items-center my-10">
                    <Text className="text-xs font-light">Version : 2.0.1</Text>
                    <Text className="text-xs text-slate-600 font-bold">&#xA9; PT Mora Pratama Kreasindo</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfileScreen