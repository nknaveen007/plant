import React from 'react'
import { StyleSheet,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import ProgressBar from '../../../Components/Home2/ProgressBar'
import TopSelectorView from '../../../Components/Home2/TopSelectorView'

const SupplierScreen = ({navigation}) => {
    return (
        <SafeAreaView>
           <HeaderView navigation={navigation} Title={'Procurement Execution'} IconFamily={'Ionicons'}/>
           <TopSelectorView heading='Current Status PO/LOI Placement' navigation={navigation}/>
           <ProgressBar title='Pressure Regulator' percent={24} nav='Status1' navigation={navigation}/>
           <ProgressBar title='Connectors' percent={39} nav='Status1' navigation={navigation}/>

        </SafeAreaView>
    )
}

export default SupplierScreen

const styles = StyleSheet.create({})
