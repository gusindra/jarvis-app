import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import SelectDropdown from 'react-native-select-dropdown'
import Input from '../../../components/Input';
import { FontAwesome } from '@expo/vector-icons';

const OrderEdit = ({route}) => {
    const data = route.params.param;
    const status = ["Order Baru", "Order di Terima", "Pembayaran Di Terima", "Sedang di Kirim", "Selesai", "Batal"];
    const [inputs, setInputs] = useState([]);

    const handleOnChange = (text, input) => {
        setInputs((prevState)=>({...prevState, [input]:text}));
    };

    useEffect(() => {
        setInputs(()=>({['status']:status[data?.status], ['resi']:data?.noResi})); 
      }, []);

    return (
        <View className="px-3 py-3 bg-white mb-2">
            <View className="flex-row py-1">
                <Text className="font-semibold capitalize">Update Order</Text> 
            </View>
            <View className="py-1 px-3">
                <Text className="text-slate-500 capitalize w-32">Status</Text>
                <View>
                    <SelectDropdown 
                        defaultButtonText={inputs?.status}
                        data={status}
                        onSelect={(selectedItem, index) => {
                            text => handleOnChange(text, 'status')
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
                    label="Nomor Resi" 
                    iconName="md-document-text-outline" 
                    placeholder="no resi" 
                    value={inputs?.noResi}
                    onChangeText={text => handleOnChange(text, 'resi')}
                />
            </View>
            <View>
                <TouchableOpacity onPress={()=>console.log(inputs)}>
                    <Text className="py-3 bg-[#303e48] w-full text-lg rounded-lg text-slate-100 text-center font-bold">Simpan</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderEdit