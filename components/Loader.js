import { View, Text, ActivityIndicator, useWindowDimensions } from 'react-native'
import React from 'react'

const Loader = ({visible=false}) => {
    const {height, width} = useWindowDimensions();

    return visible && (
        <View className="absolute z-10 items-center justify-center bg-slate-600 opacity-80" style={[{height, width}]}>
            <View className="">
                <ActivityIndicator size="large" />
                <Text className="text-slate-100">Loading</Text>
            </View>
        </View>
    );
}

export default Loader