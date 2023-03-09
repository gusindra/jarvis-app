import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ProductCart from '../../../components/ProductCart';
import { useNavigation } from '@react-navigation/native';
import StatusLabel from '../../../components/StatusLabel';
import TypeLabel from '../../../components/TypeLabel';

const OrderDetail = ({route }) => {
    const data = route.params.data;
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View className="px-3 py-3 bg-white mb-2">
                <View className="flex-row justify-between items-center pb-2 border-b border-slate-200">
                    <Text className="font-semibold capitalize"><StatusLabel type={0} code={data?.status}/></Text> 
                    <TouchableOpacity onPress={() => navigation.navigate("Edit Order", {param: data})}>
                        <View className="flex-row items-center">
                            <Ionicons name="ios-create" size={24} color="gray" />
                            <Text className="text-sm text-slate-500">Edit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between py-2">
                    <Text className="text-slate-600 capitalize">#{data?.kodeOrder}</Text>
                    <TouchableOpacity><Text className="font-bold">Lihat Invoice</Text></TouchableOpacity>
                </View>
                <View className="flex-row justify-between py-1">
                    <Text className="text-slate-500 capitalize">Tanggal pembelian</Text>
                    <TouchableOpacity><Text className="font-semibold">{data?.tanggalOrder}</Text></TouchableOpacity>
                </View>
            </View>

            <View className="px-3 py-3 bg-white mb-2">
                <View className="flex-row justify-between py-1">
                    <Text className="font-semibold capitalize">Detail Produk</Text> 
                </View>
                {data.detailorder?.map((p, k) => (
                    <ProductCart data={p} key={k} />
                ))}
            </View>

            <View className="px-3 py-3 bg-white mb-2">
                <View className="flex-row py-1">
                    <Text className="font-semibold capitalize">Info Pengiriman</Text> 
                </View>
                <View className="flex-row py-1">
                    <Text className="text-slate-500 capitalize w-32">Kurir</Text>
                    <TouchableOpacity><Text className="text-slate-600 uppercase">{data?.jenisPengiriman}</Text></TouchableOpacity>
                </View>
                <View className="flex-row py-1">
                    <Text className="text-slate-500 capitalize w-32">No Resi</Text>
                    <TouchableOpacity><Text className="text-slate-600">{data?.noResi}</Text></TouchableOpacity>
                </View>
                <View className="flex-row py-1">
                    <Text className="text-slate-500 capitalize w-32">Alamat</Text>
                    <View>
                        <Text className="font-bold text-slate-600">{data?.nama}</Text>
                        <Text className="text-slate-600 text-xs">{data?.telp}</Text>
                        <Text className="text-slate-600 text-xs w-56">{data?.alamat} {data?.kecamatan} {data?.kota}</Text>
                    </View>
                </View>
            </View>

            <View className="px-3 py-3 bg-white mb-2">
                <View className="flex-row py-1">
                    <Text className="font-semibold capitalize">Rincian Pembayaran</Text> 
                </View>
                <View className="flex-row justify-between py-2 border-b border-slate-300">
                    <Text className="text-slate-500 capitalize">Metode Pembayaran</Text>
                    <TouchableOpacity>
                        <TypeLabel type={1} code={data?.jenisPembayaran} />
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-between py-1">
                    <Text className="text-slate-500 capitalize">Total Harga</Text>
                    <TouchableOpacity><Text className="text-slate-600">{data?.total}</Text></TouchableOpacity>
                </View> 
                <View className="flex-row justify-between pb-1">
                    <Text className="text-slate-500 capitalize">Total Ongkos Kirim</Text>
                    <TouchableOpacity><Text className="text-slate-600">{data?.ongkosKirim}</Text></TouchableOpacity>
                </View> 
                <View className="flex-row justify-between pb-1">
                    <Text className="text-slate-500 capitalize">Kode Unik</Text>
                    <TouchableOpacity><Text className="text-slate-600">{data?.tarifKodeUnik}</Text></TouchableOpacity>
                </View> 
                <View className="flex-row justify-between pb-2 border-b border-slate-300">
                    <Text className="text-slate-500 capitalize">Diskon</Text>
                    <TouchableOpacity><Text className="text-slate-600">-{data?.totalDiskon}</Text></TouchableOpacity>
                </View> 
                <View className="flex-row justify-between py-1">
                    <Text className="text-slate-500 capitalize font-bold text-lg">Total Belanja</Text>
                    <TouchableOpacity><Text className="text-slate-600 font-bold text-lg">Rp {data?.total}</Text></TouchableOpacity>
                </View> 
            </View>
        </ScrollView>
    )
}

export default OrderDetail