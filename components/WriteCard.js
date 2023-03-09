import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import StatusLabel from './StatusLabel'
import { useNavigation } from '@react-navigation/native'

const WriteCard = ({data}) => {
    const navigation = useNavigation();
    return (
        <>
        {data.length?data.map((v, i) => (
            <TouchableOpacity onPress={() => navigation.navigate("Edit Page", {param: v})} key={v?.id}>
                <View className="border border-slate-100 bg-white mt-2 mx-4 flex-row justify-between p-2 rounded-lg shadow-lg">
                    <View className="flex-1">
                        <View className="flex-row justify-between">
                            <Text className="font-bold text-lg">{v?.judul}</Text>
                            <View>
                                <StatusLabel type={1} code={v?.status}/>
                            </View>
                        </View>
                        <Text>{v?.author}</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-slate-500 w-auto">{v?.created_at}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )):(
            <TouchableOpacity onPress={() => navigation.navigate("Edit Page", {param: data})}>
                <View className="border border-slate-100 bg-white mt-2 mx-4 flex-row justify-between p-2 rounded-lg shadow-lg">
                    <View className="flex-1">
                        <View className="flex-row justify-between">
                            <Text className="font-bold text-lg">{data?.judul}</Text>
                            <View>
                                <StatusLabel type={1} code={data?.status}/>
                            </View>
                        </View>
                        <Text>{data?.author}</Text>
                        <View className="flex-row items-center justify-between">
                            <Text className="text-slate-500 w-auto">{data?.created_at}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )}
        </>
        
    )
}

export default WriteCard