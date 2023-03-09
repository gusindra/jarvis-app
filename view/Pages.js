import { View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LinkCard from '../components/LinkCard'
import SaveButton from '../components/SaveButton'

const Pages = () => {
  const navigation = useNavigation();

    return (
        <ScrollView>
            <View className="m-2">
                <View className="border border-slate-300 p-4">
                    <View className="flex w-full justify-center"> 
                        <SaveButton text="Add New Pages" type="success" onPress={()=>navigation.navigate("EditLink")} />
                    </View>

                    <LinkCard name="Produk A" status="true" type="EditPage" data={{name:"Merchendise", link:"google.com", order:"1", status:true}}/>
                    <LinkCard name="Koleksi Lebaran" status="true" type="EditPage" data={{name:"Tokopedia", link:"tokopedia.com", order:"2", status:true}}/>
                    </View>
            </View>
        </ScrollView>
    )
}

export default Pages