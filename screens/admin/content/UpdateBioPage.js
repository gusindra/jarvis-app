import React from 'react' 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Links from '../../../view/Links'
import Pages from '../../../view/Pages'
import Logo from '../../../view/Logo'

const UpdateBioPage = () => {  
    const Tab = createMaterialTopTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Link" component={Links} />
            <Tab.Screen name="Pages" component={Pages} />
            <Tab.Screen name="Tampilan" component={Logo} />
        </Tab.Navigator> 
    )
}

export default UpdateBioPage