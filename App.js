import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import OtpScreen from './screens/OtpScreen';
import ProfileScreen from './screens/admin/ProfileScreen';
import DetailOrderScreen from './screens/admin/order/DetailScreen';
import GeneralScreen from './screens/admin/setting/GeneralScreen';
import NotificationScreen from './screens/admin/setting/NotificationScreen';
import AddProduct from './screens/admin/catalog/AddProduct';
import OrderEdit from './screens/admin/order/OrderEdit';
import UpdateBioPage from './screens/admin/content/UpdateBioPage';
import EditLink from './screens/admin/content/EditLink';
import UpdatePage from './screens/admin/content/UpdatePage';
import CommingScreen from './screens/CommingScreen';
import ListContent from './screens/admin/content/ListContent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="General" component={GeneralScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Order Detail" component={DetailOrderScreen} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="Edit Order" component={OrderEdit} />
        <Stack.Screen name="ListContent" component={ListContent} />
        <Stack.Screen name="UpdateBioPage" component={UpdateBioPage} />
        <Stack.Screen name="EditLink" component={EditLink} />
        <Stack.Screen name="Edit Page" component={UpdatePage} />
        <Stack.Screen name="Comming Soon" component={CommingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}
