import React,{useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import PlantVishView from '../../../Components/Home2/PlantVishView'
import { Button } from 'react-native-paper';
import GraphView from '../../../Components/Home2/GraphView';



const PlantWish = ({navigation}) => {
  
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
           <HeaderView navigation={navigation} Title={'Plant wise Material Receipt'} IconFamily={'Ionicons'}/>
           <PlantVishView title='Number of sets for which material completely received'/>
           <PlantVishView title='Number of sets for which material received >75%'/>
           <PlantVishView title='Balance Sets Pending'/>
           <GraphView/>
        </SafeAreaView>
    )
}

export default PlantWish

const styles = StyleSheet.create({})
