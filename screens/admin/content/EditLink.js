import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Input from '../../../components/Input'
import SelectDropdown from 'react-native-select-dropdown'
import { useNavigation } from '@react-navigation/native'
import { FontAwesome } from '@expo/vector-icons'
import SwitchMenu from '../../../components/SwitchMenu'

const EditLink = ({route}) => {
    const data = route?.params?.param;
    const navigation = useNavigation();
    const countries = ["halaman", "blog", "produk"];
    const [inputs, setInputs] = useState({
        isActive: data?.status,
    });
    const toggleSwitch = (value, input) =>  setInputs((prevState)=>({...prevState, [input]:value}));

    return (
        <View className="px-3 py-3 bg-white mb-2">
            <View className="flex-row py-1">
                <Text className="font-semibold capitalize">Edit Link</Text> 
            </View>
            <SwitchMenu text="Active" desc="Status aktif link tampil pada halaman" onValueChange={value => toggleSwitch(value, "isActive")}
            value={inputs['isActive']} />
            <View className="py-1 w-full"> 
                <Input 
                    value={data?.name}
                    label="Nama Link" 
                    iconName="arrow-redo-outline" 
                    placeholder="nama link" 
                />
            </View>
            <View className="py-1 px-3">
                <Text className="text-slate-500 capitalize w-32">Internal Content</Text>
                <View>
                    <SelectDropdown 
                        defaultButtonText="halaman"
                        data={countries}
                        onSelect={(selectedItem, index) => {
                            console.log(selectedItem, index)
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                        buttonStyle={{
                            width: '100%',
                            height: 50,
                            backgroundColor: '#FFF',
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: '#444',
                            }}
                        buttonTextStyle={{color: '#444', textAlign: 'left'}}
                        renderDropdownIcon={isOpened => {
                            return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={{backgroundColor: '#EFEFEF'}}
                        rowStyle={{backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'}}
                        rowTextStyle={{color: '#444', textAlign: 'left'}}
                    />
                </View>
            </View>
            <View className="py-1 w-full"> 
                <Input 
                    value={data?.link}
                    label="href / url" 
                    iconName="link" 
                    placeholder="https://jarvisstore.jstore.co" 
                />
            </View>
            <View>
                <TouchableOpacity onPress={console.log(1)}>
                    <Text className="py-3 bg-[#303e48] w-full text-lg rounded-lg text-slate-100 text-center font-bold">Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default EditLink