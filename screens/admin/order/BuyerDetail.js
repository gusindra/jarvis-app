import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import TypeLabel from '../../../components/TypeLabel';
import { Ionicons } from '@expo/vector-icons';

const BuyerDetail = ({route }) => {
    const data = route.params.data;
    return ( 
        <View className="px-3 py-3 bg-white mb-2 h-screen">
            <View className="flex-row py-1 border-b border-slate-200">
                <Text className="font-semibold capitalize"><TypeLabel type={0} code={data?.pelanggan?.tipe} /></Text> 
            </View>
            <View className="flex-row py-2 border-b border-slate-200">
                <Text className="text-slate-600 capitalize w-32">Email</Text>
                <TouchableOpacity onPress={() => Linking.openURL(`mailto:${data?.pelanggan?.email}`) } className="flex-row items-center space-x-1 justify-between">
                    <Text className="font-bold">{data?.pelanggan?.email}</Text>
                    <Ionicons name="mail" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <View className="flex-row py-2 border-b border-slate-200">
                <Text className="text-slate-500 capitalize w-32">Mobile Phone</Text>
                <TouchableOpacity onPress={() => Linking.openURL(`tel:${data?.pelanggan?.telp}`) }  className="flex-row items-center space-x-1 justify-between">
                    <Text className="font-semibold">{data?.pelanggan?.telp}</Text>
                    <Ionicons name="call" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <View className="flex-row py-2 border-b border-slate-200">
                <Text className="text-slate-500 capitalize w-32">Alamat</Text>
                 <Text className="font-semibold">{data?.pelanggan?.alamat}, {data?.pelanggan?.kabupaten?.nama}</Text> 
            </View> 
            <View className="flex-row py-2 border-b border-slate-200">
                <Text className="text-slate-500 capitalize w-32">Tanggal Daftar</Text>
                 <Text className="font-semibold">{data?.pelanggan?.created_at}</Text> 
            </View>
        </View> 
    )
}

export default BuyerDetail