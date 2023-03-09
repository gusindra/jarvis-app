import { View, Text, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Loader from '../components/Loader';
import Input from '../components/Input';
import SaveButton from '../components/SaveButton';

const Alamat = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const validate = () => {
        Keyboard.dismiss();
        let valid = false;
        if(!inputs.alamat){
            handleError("Please input email", "email");
        } 
        if(inputs){
            valid = true;
        }
        if(valid){
            save();
        }
    };

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };
    const handleError = (errorMsg, input) => {
        setErrors((prevState)=>({...prevState, [input]:errorMsg}));
    };

    const save = ()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            try {
                console.log('save alamat', inputs);
            } catch (error) {
                Alert.alert("Error", "We got problem!");
            }
        }), 3000;
    }

    return (
        <View className="flex items-center justify-center">
            <Loader visible={loading} />

            <Text className="py-6 font-bold text-lg"> </Text>
            <View className="w-full"> 
                <Input 
                    label="Alamat usaha"  
                    placeholder="alamat usaha" 
                    onChangeText={text => handleOnChange(text, 'alamatUsaha')} 
                    error={errors.alamatUsaha}
                    onFocus={()=>{
                        handleError(null, "alamatUsaha")
                    }}
                    multiline={true}
                    numberOfLines={4}
                />
            </View>  
            <SaveButton text="Simpan" onPress={()=>validate()} />
        </View>
    )
}

export default Alamat