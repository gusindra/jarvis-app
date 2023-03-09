import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import FeaturedRow from '../../components/FeaturedRow'
import { FontAwesome5, Ionicons   } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { getProductData } from '../../api';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'; 

const DashboardScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);
    
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [mainData, setMainData] = useState([]);

    const increase = () => {
        setPage(page => page + 1);
    };

    useEffect(()=>{
        console.log(page); 
        setIsLoading(true);
        getProductData(page).then(data => {
            setMainData(data);
            // console.log(data); 
        });
        setIsLoading(false);
        // setPage(page+1);
        // setInterval(()=> {
        // }, 5000);
    }, [])

    return (
        <SafeAreaView className="bg-white pt-2">
            {/* Header */}
            <View className="flex-row pb-2 items-center mx-4 space-x-2 justify-between">
                <Text><Ionicons name="menu" size={24} color="white" /></Text>
                <View className="text-center">
                    <Text className="font-semibold text-gray-600 text-lg">Dashboard</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="py-2">
                    <Text><Ionicons name="md-settings-outline" size={24} color="gray" /></Text>
                </TouchableOpacity>
            </View>

            {/* Body */}
            {isLoading?(<View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#00ff00" />
            </View>):(<ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom:100,}}>
                    
                    {/* Featured Rows */}
                    {mainData?.length>0 ? (
                        <>
                            {mainData?.map((data, i) => (
                                <FeaturedRow title="Discounts" description={data?.nama} id={i} key={i} />
                            ))}
                            {/* <FeaturedRow title="Featured" description={data?.nama} id={data?.id} /> */}
                            {/* <FeaturedRow title="Offers" description="Paid placement for our partners" id="1" /> */}
                        </>
                    ):(
                        <>
                            <Animatable.View className="flex-1 items-center justify-center pt-40" animation="pulse" easing="ease-out" iterationCount="infinite">
                                <FontAwesome5 name="ghost" size={84} color="gray" />
                            </Animatable.View>
                            <Text className="text-base my-4 text-center text-slate-600">Belum ada data</Text>
                        </>
                    )

                    }
                    
            </ScrollView>)}
        </SafeAreaView>
    )
}

export default DashboardScreen