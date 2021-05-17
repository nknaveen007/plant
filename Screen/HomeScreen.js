import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import HeaderView from '../Components/HeaderView'
import HomeView from '../Components/Home/HomeView'

const HomeScreen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
           <HeaderView navigation={navigation} Title={'Home'} arrow={true} tata={true}/>

           <View style={{flex:1,marginTop:'13%',alignItems:'center'}}>
               <HomeView Title={'Procurement'} Text1={'100% PO Placed'} Text2={'100 Sets completed'} navigation={navigation} ButtonName={'Track'} nav='Procurement'/>
               <HomeView Title={'Manufacturing'} Text1={'20 Sets Completed'} Text2={'15 Sets Under Progres'} navigation={navigation} ButtonName={'Track'} nav='Manufacture'/>
               <HomeView Title={'Despatches'} Text1={'15 Sets Despatched'} Text2={''} navigation={navigation} ButtonName={'Track'} nav='Despatch'/>
               <HomeView Title={'Installation & Commissioning'} Text1={'5 Sets Delivered'} Text2={''} navigation={navigation} ButtonName={'Track'} nav='Install'/>
           </View>

           <Image source={require('../assets/TataLogo.png')} style={{width:151,height:46,alignSelf:'center',bottom:15}}/>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
