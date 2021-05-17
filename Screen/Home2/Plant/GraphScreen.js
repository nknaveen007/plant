import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import GraphView from '../../../Components/Home2/GraphView'

const GraphScreen = ({navigation}) => {
    return (
        <SafeAreaView>
             <HeaderView navigation={navigation} Title={'Graph'} IconFamily={'Ionicons'}/>
             <GraphView/>
        </SafeAreaView>
    )
}

export default GraphScreen

const styles = StyleSheet.create({})
