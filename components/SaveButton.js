import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const SaveButton = ({text, type, onPress}) => {
  let btnStyle = "flex justify-center bg-slate-800 p-4 rounded-full w-full mx-4";
  if(type=='success'){
    btnStyle = "flex justify-center bg-green-800 p-4 rounded-full w-full mx-4";
  }else if(type=='info'){
    btnStyle = "flex justify-center bg-blue-800 p-4 rounded-full w-full mx-4";
  }

  return (
    <View className="bottom-0 w-full text-center items-center px-6 my-3">
        <TouchableOpacity onPress={onPress} className={btnStyle}>
          <Text className="text-white text-center">{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default SaveButton