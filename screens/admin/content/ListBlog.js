import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import WriteCard from '../../../components/WriteCard' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { loadBlog } from '../../../api'

const ListBlog = () => {
    const navigation = useNavigation();

    const [auth, setAuth] = useState("");
    const [inputs, setInputs] = useState({
        page: 1,
        keyword: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [canLoad, setCanLoad] = useState(true);
    const [mainData, setMainData] = useState([]); 
    const [count, setCount] = useState(1);

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };

    const handleOnSearch = () => {
        setIsLoading(true);
        loadBlog(inputs, auth).then(data => {
            if(data==undefined){
                console.log("fail set main data"); 
            }else{
                let dataF = data.data; 
                setMainData(dataF);
            }
        });
        setCount(1);
        setInputs((prevState)=>({...prevState, ["page"]:count}));
        setIsLoading(false);
    }

    const handleOnClearFilter = () => {
        setInputs((prevState)=>({...prevState, ["keyword"]:""}));
        updateData(inputs, auth);
    }

    const updateData = (inputs, auth) => { 
        console.log(inputs);
        loadBlog(inputs, auth).then(data => {
            if(data==undefined){
                console.log("fail set main data"); 
            }else{
                let dataF = data.data; 
                console.log(dataF.length);
                if(dataF.length==0){
                    setCanLoad(false);
                }else{
                    // setMainData(dataF);
                    setMainData(current => [...current, dataF]);
                }
                // console.log("success set main data", mainData); 
                // console.log(mainData.length);
            }
        }); 
        setCount(count+1);
        setInputs((prevState)=>({...prevState, ["page"]:count}));
    }

    useEffect(()=>{
        try{
            // console.log("input", inputs); 
            AsyncStorage.getItem('authHeader').then(value => {
                // console.log(value);
                setAuth(value);
            });
            // console.log("get auth:", auth);
            setIsLoading(true);
            // updateData(inputs, auth);
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }, [])

    return (
        <SafeAreaView className="bg-white">
            {/* Search */}
            <View className="flex-row item-center space-x-2 pb-4 border-b-2 border-b-slate-200">
                <View className="flex-row soace-x-2 flex-1 bg-gray-200 p-2 h-150 rounded-lg mx-4">
                    <TextInput 
                        value={inputs?.keyword} 
                        onChangeText={text => handleOnChange(text, 'keyword')} 
                        className="text-lg py-1 px-1" 
                        placeholder="Search page" 
                        keyboardType='default' 
                    />
                    <View className="absolute right-1 mt-1 rounded-lg">
                        <View className="flex-row">
                            {inputs.keyword?(<TouchableOpacity onPress={() => handleOnClearFilter()} className="mr-1">
                                <Text className="mx-2 py-2">
                                    <Ionicons name="close" size={24} color="red" />
                                </Text>
                            </TouchableOpacity>):""}
                            <TouchableOpacity onPress={() => handleOnSearch()} className="bg-slate-100">
                                <Text className="mx-2 py-2">
                                    <Ionicons name="filter" size={24} color="gray" />
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView className="bg-gray-100 pb-10 mb-32 h-fit">
                {mainData ? (
                    <>
                        {mainData?.map((data, i) => (
                            <WriteCard data={data} key={i} />
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
                <WriteCard data={{judul:"1",status:"0",author:"3",created_at:"4"}} /> 
                <WriteCard data={{judul:"1",status:"1",author:"3",created_at:"4"}} /> 
                <WriteCard data={{judul:"1",status:"2",author:"3",created_at:"4"}} /> 
            </ScrollView>
        </SafeAreaView>
    )
}

export default ListBlog