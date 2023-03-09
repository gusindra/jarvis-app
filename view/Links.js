import { View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import LinkCard from '../components/LinkCard'
import SaveButton from '../components/SaveButton'

const Links = () => {
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View className="m-2">
                <View className="border border-slate-300 p-4">
                    <View className="flex w-full justify-center"> 
                        <SaveButton text="Add New Link" type="success" onPress={()=>navigation.navigate("EditLink")} />
                    </View>

                    <LinkCard data={{name:"Merchendise", link:"google.com", order:"1", status:true}}/>
                    <LinkCard data={{name:"Tokopedia", link:"tokopedia.com", order:"2", status:true}}/>
                    <LinkCard data={{name:"shopee", link:"shoppee.com", order:"3", status:false}}/>
                    <LinkCard data={{name:"example", link:"example.com", order:"4", status:true}}/>
                </View>
            </View>
        </ScrollView>
    )
}

export default Links