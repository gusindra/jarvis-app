import { View, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'  
import Umum from '../../../view/Umum';
import Alamat from '../../../view/Alamat';
import Setting from '../../../view/Setting';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const GeneralScreen = () => { 
    const Tab = createMaterialTopTabNavigator();

    return ( 
        <Tab.Navigator>
            <Tab.Screen name="Tentang" component={Umum} />
            <Tab.Screen name="Alamat" component={Alamat} />
            <Tab.Screen name="Pengaturan" component={Setting} />
        </Tab.Navigator> 
    )
}

export default GeneralScreen