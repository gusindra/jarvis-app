import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import OrderCard from '../../components/OrderCard';
import { loadOrder } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OrderScreen = () => {
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    const [auth, setAuth] = useState("");
    const [inputs, setInputs] = useState({
        page: 1,
        keyword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [canLoad, setCanLoad] = useState(true);
    const [mainData, setMainData] = useState([]);
    const [mainDataLoad, setMainDataLoad] = useState([{no:1},{no:2}]);
    const [count, setCount] = useState(1);

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };

    const handleOnSearch = () => {
        setIsLoading(true);
        loadOrder(inputs, auth).then(data => {
            if(data==undefined){
                console.log("fail set main data"); 
            }else{
                let dataF = data.data; 
                setMainData(dataF);
                setIsLoading(false);
            }
        });
        setCount(1);
        setInputs((prevState)=>({...prevState, ["page"]:count}));
    }

    const handleOnClearFilter = () => {
        setInputs((prevState)=>({...prevState, ["keyword"]:""}));
        updateData(inputs, auth);
    }

    const updateData = (inputs, auth) => { 
        setIsLoading(true);
        loadOrder(inputs, auth).then(data => {
            if(data==undefined){
                console.log("fail set main data"); 
                setIsLoading(false);
            }else{
                let dataF = data.data; 
                // console.log(dataF.length);
                if(dataF.length==0){
                    setIsLoading(false);
                    setCanLoad(false);
                }else{
                    // setMainData(dataF);
                    setMainData(current => [...current, dataF]);
                    setIsLoading(false);
                }
                // console.log("success set main data", mainData); 
                // console.log(mainData.length);
            }
        }); 
        setCount(count+1);
        setInputs((prevState)=>({...prevState, ["page"]:count}));
    }

    const pushObject = () => {
        setMainDataLoad(current => [...current, {no: count}]);
        setCount(count+1);
        // console.log(mainDataLoad.length);
        // console.log(mainDataLoad);
    }

    useEffect(()=>{
        try{ 
            AsyncStorage.getItem('authHeader').then(value => { 
                setAuth(value);
            }); 
            // updateData(inputs, auth); 
        }catch(error){
            console.log(error);
        }
    }, [])

    return (
        <SafeAreaView className="bg-white">
            <View className="flex-row pb-2 items-center mx-4 space-x-2 justify-between">
                <Text><Ionicons name="menu" size={24} color="white" /></Text>
                <View className="text-center">
                    <Text className="font-semibold text-gray-600 text-lg">Order List</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} className="py-2">
                    <Text><Ionicons name="md-settings-outline" size={24} color="gray" /></Text>
                </TouchableOpacity>
            </View>

            {/* Search */}
            <View className="flex-row item-center space-x-2 pb-4 border-b-2 border-b-slate-200">
                <View className="flex-row justify-between space-x-2 flex-1 bg-gray-200 p-1 h-150 rounded-lg mx-4">
                    <TextInput 
                        value={inputs?.keyword} 
                        onChangeText={text => handleOnChange(text, 'keyword')} 
                        className="text-lg py-1 px-1" 
                        placeholder="Search order" 
                        keyboardType='default' 
                    />
                    <View className="items-center rounded-lg">
                        <View className="flex-row">
                            {inputs.keyword?(<TouchableOpacity onPress={() => handleOnClearFilter()} className="mr-1">
                                <Text className="mx-1 py-2">
                                    <Ionicons name="close" size={24} color="orange" />
                                </Text>
                            </TouchableOpacity>):""}
                            <TouchableOpacity onPress={() => handleOnSearch()} className="bg-slate-100 rounded-lg">
                                <Text className="mx-2 py-2">
                                    <Ionicons name="search" size={24} color="gray" />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View> 

            {/* Content */}
            {isLoading?(<View className="flex-1 items-center justify-center h-screen">
                <ActivityIndicator className="h-screen mt-20" size="large" color="#00ff00" />
            </View>):(<ScrollView className="bg-gray-100 pb-10 mb-32 h-fit">
                    {/* Featured Rows */}
                    {mainData ? (
                        <>
                            {mainData?.map((data, i) => (
                                <OrderCard data={data} key={i} />
                            ))}
                            {canLoad ? (<TouchableOpacity onPress={()=>updateData(inputs, auth)}>
                                <View className="pb-10 text-center w-full flex justify-center mt-6"><Text className="text-center font-semibold text-slate-600 text-lg">Load more</Text></View>
                            </TouchableOpacity>):(<Text></Text>)}
                        </>
                    ):(
                        <>
                            <Animatable.View className="flex-1 items-center justify-center pt-40 " animation="pulse" easing="ease-out" iterationCount="infinite">
                                <FontAwesome5 name="ghost" size={84} color="gray" />
                            </Animatable.View>
                            <Text className="text-base my-4 text-center text-slate-600">Belum ada data</Text>
                            <TouchableOpacity onPress={()=>updateData(inputs, auth)}>
                                <View className="pb-48 text-center w-full flex justify-center mt-6"><Text className="text-center font-semibold text-slate-600 text-lg">Refresh</Text></View>
                            </TouchableOpacity>
                        </>
                    )}
                    {/* <TouchableOpacity onPress={()=>pushObject()}>
                        <View className="pb-48 text-center w-full flex justify-center mt-6"><Text className="text-center font-semibold text-slate-600 text-lg">push</Text></View>
                    </TouchableOpacity> */}
            </ScrollView>)} 
        </SafeAreaView>
    )
}

export default OrderScreen