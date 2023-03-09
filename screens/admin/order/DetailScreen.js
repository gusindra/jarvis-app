import { View, Text } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OrderDetail from './OrderDetail';
import BuyerDetail from './BuyerDetail';

const DetailScreen = ({route}) => {
  const data = route?.params?.param;
  const Tab = createMaterialTopTabNavigator();
  
  return ( 
      <Tab.Navigator>
          <Tab.Screen 
            name="Order" 
            component={OrderDetail} 
            initialParams={{data: data}} 
            options={{
              headerTitle: (props) => <Text>test</Text>,
              headerRight: () => (
                <Button
                  onPress={() => console.log("info")}
                  title="Info"
                  color="#00cc00"
                />
              ),
            }}
          />
          <Tab.Screen name="Costumer" component={BuyerDetail} initialParams={{data: data}} />
      </Tab.Navigator> 
  )
}

export default DetailScreen