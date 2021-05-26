import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import MapComponentView from '../../../Components/MapComponentView'


const IcMapScreen = ({navigation,route}) => {
    const {filterData,statedata}=route.params
    
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
        <HeaderView navigation={navigation} Title={'I&C Location wise details'} IconFamily={'Ionicons'}/>
        <MapComponentView filterData={filterData} statedata={statedata}/>
       </SafeAreaView>
    )
}

export default IcMapScreen

const styles = StyleSheet.create({})
