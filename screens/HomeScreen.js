import { View, Image, Text, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Ionicons  } from '@expo/vector-icons';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import CatalogScreen from './admin/CatalogScreen';
import OrderScreen from './admin/OrderScreen';
import DashboardScreen from './admin/DashboardScreen';
import AddScreen from './admin/AddScreen';
import ContentScreen from './admin/ContentScreen';

function HomeScreen() {
    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                let iconName;
    
                if (route.name === 'Catalog') {
                    iconName = focused
                    ? 'pricetags'
                    : 'pricetags-outline';
                } else if (route.name === 'Order') {
                    iconName = focused ? 'ios-cart' : 'ios-cart-outline';
                }else if (route.name === 'Board') {
                    iconName = focused ? 'home' : 'home-outline';
                }else if (route.name === 'Add') {
                    iconName = focused ? 'add-circle' : 'add-circle-outline';
                }else if (route.name === 'Content') {
                    iconName = focused ? 'ios-file-tray-full' : 'ios-file-tray-full-outline';
                }
    
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle:{
                    height:80, 
                },
                tabBarItemStyle:{ 
                    margin:18,
                    borderRadius:10,
                  }
            })}
        >
            <Tab.Screen name="Board" component={DashboardScreen} />
            <Tab.Screen name="Content" component={ContentScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="Catalog" component={CatalogScreen} />
            <Tab.Screen name="Order" component={OrderScreen} options={{ tabBarBadge: 3 }} />
        </Tab.Navigator>
    )
}

export default HomeScreen