import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import HeaderView from '../../Components/HeaderView'
import PlantVishView from '../../Components/Home2/PlantVishView'
import CalanderView from '../../Components/CalanderView'

const ICstatusScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
            <HeaderView navigation={navigation} Title={'I&C status & plan'} IconFamily={'Ionicons'}/>
            <ScrollView>
           <PlantVishView title='Number of plants commissioned'/>
           <PlantVishView title='Number of plants under commissioning'/>
           <PlantVishView title='Number of plants despatched but commissioning not initiated'/>
           <CalanderView/>
           </ScrollView>
        </SafeAreaView>
    )
}

export default ICstatusScreen

const styles = StyleSheet.create({})
