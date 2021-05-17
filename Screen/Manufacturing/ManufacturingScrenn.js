import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import HeaderView from '../../Components/HeaderView'
import PlantVishView from '../../Components/Home2/PlantVishView'
import CalanderView from '../../Components/CalanderView'

const ManufacturingScrenn = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
            <HeaderView navigation={navigation} Title={'Manufacturing'} IconFamily={'Ionicons'}/>
            <ScrollView>
           <PlantVishView title='Number of plants Assembled'/>
           <PlantVishView title='Number of plants currently under manufacturing'/>
           <PlantVishView title='Number of plants for which material has arrived but manufacturing not started'/>
           <CalanderView/>
           </ScrollView>
        </SafeAreaView>
    )
}

export default ManufacturingScrenn

const styles = StyleSheet.create({})
