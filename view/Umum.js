import { View, Text, Keyboard, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Input from '../components/Input'
import Loader from '../components/Loader';
import SaveButton from '../components/SaveButton';
import { ConfirmDialog } from 'react-native-simple-dialogs';

const Umum = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [dialog, setDialog] = useState(false);

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
            setDialog(true);
        }
    };

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };
    const handleError = (errorMsg, input) => {
        setErrors((prevState)=>({...prevState, [input]:errorMsg}));
    };

    const save = () => { 
        setDialog(false)
        setLoading(true);
        setTimeout(()=>{
            try {
                console.log('save umum', inputs);
                setLoading(false);
            } catch (error) {
                Alert.alert("Error", "We got problem!");
            }
        }, 3000);
    }

    return (
        <View className="flex items-center justify-center">
            <Loader visible={loading} />
            <ConfirmDialog
                title="Konfirmasi"
                message="Lanjut mengubah data ?"
                visible={dialog}
                onTouchOutside={() => setDialog(false)} 
                positiveButton={{
                    title: "YES",
                    onPress: () => save()
                }}
                negativeButton={{
                    title: "NO",
                    onPress: () => setDialog(false)
                }}
            />
            <ScrollView>
                <Text className="py-6 font-bold text-lg"> </Text>
                <View className="w-full">
                    <Input 
                        label="Nama usaha"  
                        placeholder="nama usaha" 
                        onChangeText={text => handleOnChange(text, 'namaUsaha')} 
                        error={errors.namaToko}
                        onFocus={()=>{
                            handleError(null, "namaToko")
                        }}
                    />
                    <Input 
                        label="Deskripsi usaha"  
                        placeholder="deskripsi usaha" 
                        onChangeText={text => handleOnChange(text, 'dekripsiUsaha')} 
                        error={errors.namaToko}
                        onFocus={()=>{
                            handleError(null, "namaToko")
                        }}
                        multiline={true}
                        numberOfLines={4}
                    />
                </View> 
                
                <Text className="font-bold"> </Text>
                <View className="w-full">
                    <Input 
                        keyboardType="numeric"
                        label="Line Phone"  
                        placeholder="no telepon" 
                        onChangeText={text => handleOnChange(text, 'linePhone')} 
                        error={errors.namaToko}
                        onFocus={()=>{
                            handleError(null, "linePhone")
                        }}
                    />
                    <Input 
                        keyboardType="numeric"
                        label="Mobile Phone"  
                        placeholder="no mobile telepon" 
                        onChangeText={text => handleOnChange(text, 'mobilePhone')} 
                        error={errors.namaToko}
                        onFocus={()=>{
                            handleError(null, "mobilePhone")
                        }}
                    />
                    <Input 
                        label="Email"  
                        placeholder="email" 
                        onChangeText={text => handleOnChange(text, 'email')} 
                        error={errors.namaToko}
                        onFocus={()=>{
                            handleError(null, "email")
                        }}
                    />
                </View> 
                <SaveButton text="Simpan" onPress={()=>validate()} />
            </ScrollView>
        </View>
    )
}

export default Umum