import { View, Text, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import OtpCard from '../components/OtpCard';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CryptoES from 'crypto-es';

function OtpScreen() {
    const navigation = useNavigation();
    
    const [user, setUser] = useState("");
    const [otp, setOtp] = useState("");
    const handleChange = (enteredOtp) => {
        setOtp(enteredOtp);
    };

    useEffect(()=>{
        getUser();
    }, []);

    const userLogout = () => {
        try{
            AsyncStorage.removeItem('logUser');
            AsyncStorage.removeItem('auth');
            navigation.navigate('Login')
        }catch(error){
            console.log(error);
        }
    }

    const getUser = () => {
        try{
            // AsyncStorage.getItem('auth').then(auth => {
            //     // let data = JSON.parse(auth);
            //     // console.log("auth en", auth);
            //     let decrypted = CryptoES.AES.decrypt(JSON.parse(auth), "Secret");
            //     console.log("input de", decrypted.toString(CryptoES.enc.Utf8));
            //     let data = JSON.parse(decrypted.toString(CryptoES.enc.Utf8));
            //     console.log("email", data.email);
            //     console.log("password", data.password);
            // });
            AsyncStorage.getItem('logUser').then(value => {
                // let data = JSON.parse(value);
                console.log("logUser", value);
                
                if(value != null){
                    setUser(value);
                }else{
                    navigation.navigate("Login");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                }
            });
        }catch(error){
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="flex-1 items-center bg-white h-full">
            <View className="flex bg-white rounded-md p-5">
                <View className="flex-row justify-between space-x-2 items-center mb-20">
                    <TouchableOpacity onPress={() => userLogout()}>
                        <Text><Ionicons name="chevron-back" size={24} color="black" /></Text>
                    </TouchableOpacity>
                    <View className="text-center">
                        <Text className="font-bold text-gray-700 text-xl">Verification</Text> 
                    </View>
                    <Text></Text>
                </View>
                <View className="my-20">
                    <Text className="text-slate-700 mx-20 mb-10 text-center">Kode Verification telah dikirim ke akun {user?.email}, silahkan masukan disini.</Text>
                    <OtpCard />
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text className="text-xs font-bold text-right mt-3 mr-2 text-slate-400">Resend code</Text>
                    </TouchableOpacity>
                </View>
                <View className="w-auto items-center">
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text className="px-6 py-3 bg-[#303e48] text-lg rounded-xl text-slate-100 text-center font-bold">Verify</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default OtpScreen