import { View, Text } from 'react-native'
import React from 'react'
import AddCard from '../../components/AddCard'

const AddScreen = () => {
  return (
    <View>
      <View className=" pt-3 pb-1 px-4">
        <Text className="font-bold text-base text-slate-600">Pilih item yang ingin di tambahkan</Text>
      </View>
      <AddCard text="Add New Product" iconName="pricetag-outline" link="AddProduct" />
      <AddCard text="Add New Category" iconName="list" link="Comming Soon"/>
      <AddCard text="Add New Collection" iconName="albums-outline" link="Comming Soon"/>
      <AddCard text="Add New Blog" iconName="ios-document-text-outline" link="Comming Soon"/>
      <AddCard text="Add New Halaman" iconName="ios-document-outline" link="Comming Soon"/>
    </View>
  )
}

export default AddScreen