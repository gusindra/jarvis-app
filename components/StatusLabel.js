import { View, Text, Alert } from 'react-native'
import React, { useState } from 'react'

const StatusLabel = ({type=0, code}) => {
    // type 0 = order, 1 = page, 2 = blog
    const [status, setStatus] = useState([
        [
            {name:"Konfirmasi", style:"text-yellow-600 bg-yellow-200 p-1 rounded-md text-xs"}, 
            {name:"Menunggu pembayaran", style:"text-blue-600 bg-blue-200 p-1 rounded-md text-xs"}, 
            {name:"Cek Pembayaran", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"}, 
            {name:"Lunas", style:"text-green-600 bg-green-200 p-1 rounded-md text-xs"}, 
            {name:"Sedang dikirim", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"}, 
            {name:"Selesai", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"}, 
            {name:"Batal", style:"text-red-600 bg-red-200 p-1 rounded-md text-xs"}
        ],[
            {name:"Draft", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"},
            {name:"Publish", style:"text-green-600 bg-green-200 p-1 rounded-md text-xs"},
            {name:"Unpublish", style:"text-red-600 bg-red-200 p-1 rounded-md text-xs"}
        ]
    ]) 

    return (
        <View> 
            {status[type].map((element, i) => { 
                if(i==code){
                    return (<Text className={element.style} key={i}>{element.name}</Text>);
                }
            })} 
        </View>
    )
}

export default StatusLabel