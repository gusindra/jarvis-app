import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const ProductCart = ({data}) => { 
    const priceFormat = (num) => {
        return "Rp";
        // return 'Rp ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    }
    
    return (
        <View className="border border-slate-200 rounded-xl mt-2 py-2 px-3 shadow-sm">
            <View className="flex-row py-1 gap-2 items-center">
                <Image source={{
                        uri: 'https://s3-ap-southeast-1.amazonaws.com/cdn.jarvis-store.com/sayurboxdps-upload/produk/medium/'+data?.produk?.gambar1,
                    }}
                    className="h-20 w-20 rounded-sm"
                />
                <View className="flex-auto">
                    <Text className="font-bold">{data?.produk?.nama}</Text>
                    <View className="flex-row space-x-1 border-b border-slate-200 pb-2">
                        <Text className="font-normal text-xs">{data.qty}</Text>
                        <Text className="font-normal text-xs">x</Text>
                        <Text className="font-normal text-xs">Rp {data?.hargaSatuan}</Text>
                    </View>
                    <View className="flex-row justify-between py-1">
                        <View>
                            <Text className="text-slate-600 capitalize text-xs">Total harga</Text>
                            <Text className="font-semibold capitalize text-xs">Rp{(data?.hargaSatuan*data?.qty)}</Text>
                        </View>
                        <TouchableOpacity><Ionicons name="md-arrow-forward-circle-outline" size={24} color="black" /></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProductCart