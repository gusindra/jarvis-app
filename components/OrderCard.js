import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DetailScreen from '../screens/admin/order/DetailScreen';
import StatusLabel from './StatusLabel';

const OrderCard = ({data}) => {
    const navigation = useNavigation();
    // console.log("order", data);
    return (
        <>
        {data.length?data.map((v, i) => (
            <TouchableOpacity onPress={() => navigation.navigate("Order Detail", {param: v})} key={v?.id}>
                <View className="border border-slate-100 bg-white mt-2 mx-4 flex-row justify-between p-2 rounded-lg shadow-lg">
                    <View className="flex-1">
                        <View className="flex-row justify-between">
                            <Text className="font-bold text-lg">{v?.kodeOrder}</Text>
                            <View>
                                <StatusLabel type={0} code={data?.status}/>
                            </View>
                        </View>
                        <Text className="capitalize">{v?.pelanggan?.nama}</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-slate-500 w-auto">Rp {v?.total}</Text>
                            <Text className="text-slate-500 w-auto">{v?.tanggalOrder}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )):(
            <TouchableOpacity onPress={() => navigation.navigate("Order Detail", {param: data})}>
                <View className="border border-slate-100 bg-white mt-2 mx-4 flex-row justify-between p-2 rounded-lg shadow-lg">
                    <View className="flex-1">
                        <View className="flex-row justify-between">
                            <Text className="font-bold text-lg">{data?.kodeOrder}</Text>
                            <View> 
                                <StatusLabel type={0} code={data?.status}/>
                            </View>
                        </View>
                        <Text className="capitalize">{data?.pelanggan?.nama}</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-slate-500 w-auto">Rp {data?.total}</Text>
                            <Text className="text-slate-500 w-auto">{data?.tanggalOrder}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )}
    </>
    )
}

export default OrderCard