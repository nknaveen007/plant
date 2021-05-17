import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import LocationData from '../../../Components/LocationData'
import LocationTopView from '../../../Components/LocationTopView'
import { Button } from 'react-native-paper';


const IcLocationScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
        <HeaderView navigation={navigation} Title={'I&C Location wise details'} IconFamily={'Ionicons'}/>
        <LocationTopView navigation={navigation}/>
        <LocationData state='MP' city='MP' Planned='xxx' location='MP' installed='xxx'/>
        <LocationData state='MP' city='MP' Planned='xxx' location='MP' installed='xxx'/>
        <LocationData state='MP' city='MP' Planned='xxx' location='MP' installed='xxx'/>
        <LocationData state='MP' city='MP' Planned='xxx' location='MP' installed='xxx'/>
        <LocationData state='MP' city='MP' Planned='xxx' location='MP' installed='xxx'/>
        <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:16,color:'#3a7dda',fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Icmap')} color='#FFFFFF'  style={{borderColor:'#3a7dda',borderWidth:1,borderRadius:10,position:'absolute',bottom:15,width:'90%',alignSelf:'center'}}>
               Show Map
        </Button>
    </SafeAreaView>
    )
}

export default IcLocationScreen

const styles = StyleSheet.create({})
