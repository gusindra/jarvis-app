import { View, Image, Text, TextInput, TouchableOpacity, Linking, Keyboard, Alert } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postLogin } from '../api';
import { MD5 } from 'crypto-es/lib/md5.js';
import CryptoES from 'crypto-es';

function LoginScreen() {
    const navigation = useNavigation();
    const [inputs, setInputs] = useState({
        email: "sayurboxdenpasar@gmail.com",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        getUser();
    }, []);

    const getUser = () => {
        try{
            AsyncStorage.getItem('logUser').then(value => {
                // console.log("login page user=", value);
                if(value != null){
                    navigation.navigate("Otp");
                }
            });
        }catch(error){
            console.log(error);
        }
        setLoading(false);
    }

    const validate = () => {
        Keyboard.dismiss();
        let valid = false;
        if(!inputs.email){
            handleError("Please input email", "email");
        }else if(!inputs.email.match(/\S+@\S+\.\S+/)){
            handleError("Please input valid email", "email");
        }
        if(!inputs.password){
            handleError("Please input password", "password");
        }
        if(inputs){
            valid = true;
        }
        if(valid){
            login();
        }
    };

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };
    const handleError = (errorMsg, input) => {
        setErrors((prevState)=>({...prevState, [input]:errorMsg}));
    };

    const login = ()=>{ 
        setLoading(true);
        if(inputs.email && inputs.password){
            setTimeout(()=>{
                try {
                    postLogin(inputs).then((result) => { 
                        // console.log('result: ', result); 
                        if(result && result.data){
                            //sent to Gcm
                            let hash = MD5(result).toString();
                            //save to auth api request
                            let encrypted = CryptoES.AES.encrypt(JSON.stringify(inputs), "Secret");

                            // let decrypted = CryptoES.AES.decrypt(encrypted, "Secret");
                            // console.log("input de", decrypted.toString(CryptoES.enc.Utf8));

                            AsyncStorage.setItem("logUser", JSON.stringify(hash));
                            AsyncStorage.setItem("auth", JSON.stringify(encrypted));
                            navigation.navigate("Otp");
                        }else{
                            Alert.alert("Error", "We cant found your Account!");
                            setLoading(false);
                        }
                    }, console.error);
                } catch (error) {
                    Alert.alert("Error", "We got problem!");
                    setLoading(false);
                }
            }, 3000);
            setInputs({email: "sayurboxdenpasar@gmail.com", password: ""});
        }else{
            setLoading(false);
            Alert.alert("Error", "Email/password empty!");
            // console.log('email/password empty'); 
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <SafeAreaView className="pt-5 bg-white h-full">
            <Loader visible={loading} />
            {/* Header */}
            <View className="flex items-center justify-center">
                <View className="mt-14 mb-4">
                    <Image source={{
                    uri: "https://s3.ap-southeast-1.amazonaws.com/cdn2.jarvis-store.com/frontend/version/2/New/jarvis-store-logo-black.png",
                    }}
                    className="h-20 w-56 px-4 rounded-sm"
                    />
                </View>
                <View className="flex items-center justify-center px-4 rounded-md w-full">
                    <View className="flex items-center pb-4">
                        <Text className="font-bold text-gray-700 text-2xl my-1">Admin Store Area</Text> 
                        <Text className="font-normal text-gray-700 text-xs w-72 my-4 text-center">Sudah punya akun di Jarvis Store, login untuk mengatur konten pada website.</Text>
                    </View>
                    <View className="flex w-full px-3">
                        <Input 
                            value={inputs?.email}
                            label="Email" 
                            iconName="mail-outline" 
                            placeholder="email akun" 
                            onChangeText={text => handleOnChange(text, 'email')} 
                            error={errors.email}
                            onFocus={()=>{
                                handleError(null, "email")
                            }}
                        />
                        <Input 
                            value={inputs?.password}
                            label="Password" 
                            iconName="lock-closed-outline" 
                            password={true} 
                            placeholder="password" 
                            onChangeText={text => handleOnChange(text, 'password')} 
                            error={errors.password}
                            onFocus={()=>{
                                handleError(null, "password")
                            }}
                        />
                        {/* <TextInput className="focus:ring hover:border-slate-400 pt-2 pb-2 rounded-lg text-slate-600 w-auto text-xl text-center bg-slate-100" placeholder='Email akun' /> */}
                        <View>
                            <TouchableOpacity onPress={validate}>
                                <Text className="py-3 bg-[#303e48] w-full text-lg rounded-lg text-slate-100 text-center font-bold">Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View className="flex-row justify-between my-4 space-x-1">
                        <Text className="text-xs font-normal">Tidak punya akun?</Text>
                        <TouchableOpacity onPress={() => Linking.openURL("https://jarvis-store.com/signup")}><Text className="text-xs font-bold">Daftar sekarang</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
 
        </SafeAreaView>
    )
}

export default LoginScreen