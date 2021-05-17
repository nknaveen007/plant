import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import ProgressBar from '../../../Components/Home2/ProgressBar'
import TopSelectorView from '../../../Components/Home2/TopSelectorView'

const MaterialReceipt = ({navigation}) => {
    return (
        <SafeAreaView>
           <HeaderView navigation={navigation} Title={'Material Receipt Status'} IconFamily={'Ionicons'}/>
           <TopSelectorView heading='Material Receipt Status (By Count)' navigation={navigation}/>
           <ProgressBar title='Pressure Regulator' percent={14} nav='Status1' navigation={navigation}/>
           <ProgressBar title='Connectors' percent={89} nav='Status1' navigation={navigation}/>

        </SafeAreaView>
    )
}

export default MaterialReceipt

const styles = StyleSheet.create({})
