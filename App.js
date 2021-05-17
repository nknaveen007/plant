import * as React from 'react';
import { StyleSheet, Text, View ,SafeAreaView,Platform} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import IntroScreen from './Screen/IntroScreen';
import LoginScreen from './Screen/LoginScreen';
import OtpScreen from './Screen/OtpScreen';
import HomeScreen from './Screen/HomeScreen';
import Home2Screen from './Screen/Home2Screen';
import SupplierScreen from './Screen/Home2/Supplier/SupplierScreen';
import MaterialReceipt from './Screen/Home2/Material/MaterialReceipt';
import PlantWish from './Screen/Home2/Plant/PlantWish';
import StatusScreen1 from './Screen/Home2/Supplier/StatusScreen1';
import GraphScreen from './Screen/Home2/Plant/GraphScreen';
import ManufacturingScrenn from './Screen/Manufacturing/ManufacturingScrenn';
import DespatchesScreen from './Screen/Despatches/DespatchesScreen';
import InstallationScreen from './Screen/Initallation/InstallationScreen';
import ICstatusScreen from './Screen/Initallation/ICstatusScreen';
import IcLocationScreen from './Screen/Initallation/Location/IcLocationScreen';
import IcMapScreen from './Screen/Initallation/Location/IcMapScreen';



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3a7dda',
    accent: 'yellow',
  },
};

const Stack = createStackNavigator();
const HomeStack =createStackNavigator();


const main=()=>{
  
  return(
    <PaperProvider theme={theme}>
    <App />
  </PaperProvider>
  )
}

const HomeStackScreen=()=>{
  return(
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Procurement" component={Home2Screen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Supplier" component={SupplierScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Material" component={MaterialReceipt} options={{headerShown:false}}/>
      <HomeStack.Screen name="Plant" component={PlantWish} options={{headerShown:false}}/>
      <HomeStack.Screen name="Status1" component={StatusScreen1} options={{headerShown:false}}/>
      <HomeStack.Screen name="Graph" component={GraphScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Manufacture" component={ManufacturingScrenn} options={{headerShown:false}}/>
      <HomeStack.Screen name="Despatch" component={DespatchesScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Install" component={InstallationScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Icstatus" component={ICstatusScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Iclocation" component={IcLocationScreen} options={{headerShown:false}}/>
      <HomeStack.Screen name="Icmap" component={IcMapScreen} options={{headerShown:false}}/>
      
     
       
    </HomeStack.Navigator>
  )
}




function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Intro'>
        <Stack.Screen name="Intro" component={IntroScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Otp" component={OtpScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeStackScreen} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default main;