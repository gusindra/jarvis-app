import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, MaterialIcons  } from '@expo/vector-icons'

const Input = ({label, iconName, error, password, onFocus = () => {}, ...props}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(password);
    const [inputStyle, setIinputStyle] = useState("h-50 bg-white items-center flex-row items-top border-b border-gray-400 py-1 px-1");
    const [errorStyle, setErrorStyle] = useState("h-50 bg-white items-center flex-row items-top border-b border-red-400 py-1 px-1");
    
    return (
        <View className="mb-1 mx-3">
            <Text className="text-sm text-gray-400">{label}</Text>
            <View className={error?errorStyle:inputStyle} style={[{borderColor: error ? 'red':isFocused?'black':'black'}]}>
                {iconName && <View className="mt-1">
                    <Ionicons name={iconName} size={22} color="gray" />
                </View>}
                <TextInput
                    secureTextEntry={hidePassword}
                    className="text-[#303e48] flex-1 justify-start text-lg px-1" {...props} onFocus={() => {
                    onFocus();
                }} />
                {password && (
                    <View className="mt-3">
                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                            <Ionicons name={hidePassword?"eye-outline":"eye-off-outline"} size={22} color="gray" />
                        </TouchableOpacity>
                    </View>
                )}
                
            </View>
            <Text className="text-xs color-red-400">{error}</Text>
        </View>
    )
}

export default Input