import { View, Text } from 'react-native'
import React, { useState } from 'react'

const TypeLabel = ({type=0, code}) => {
    // type 0 = costumer, 1 = payment method, 2 = blog
    const [status, setStatus] = useState([
        [
            {name:"Tamu", style:"text-yellow-600 bg-yellow-200 p-1 rounded-md text-xs"}, 
            {name:"Member", style:"text-blue-600 bg-blue-200 p-1 rounded-md text-xs"}, 
            {name:"Mitra", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"}, 
        ],
        [
            {name:"Transfer Bank", style:"text-yellow-600 bg-yellow-200 p-1 rounded-md text-xs"}, 
            {name:"Paypal", style:"text-blue-600 bg-blue-200 p-1 rounded-md text-xs"}, 
            {name:"COD", style:"text-gray-600 bg-gray-200 p-1 rounded-md text-xs"}, 
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

export default TypeLabel