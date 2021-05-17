import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import MapView from '../../../Components/MapView'

const IcMapScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
        <HeaderView navigation={navigation} Title={'I&C Location wise details'} IconFamily={'Ionicons'}/>
       <MapView/>
       </SafeAreaView>
    )
}

export default IcMapScreen

const styles = StyleSheet.create({})
