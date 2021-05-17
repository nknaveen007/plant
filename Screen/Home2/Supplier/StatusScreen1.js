import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import LinearProgress from '../../../Components/Home2/LinearProgress'
import HeaderView from '../../../Components/HeaderView'


const StatusScreen1 = ({navigation}) => {
    return (
        <SafeAreaView style={{height:'100%'}}>
            <HeaderView navigation={navigation} Title={'Pressure Regulator'} IconFamily={'Ionicons'}/>
            <ScrollView showsVerticalScrollIndicator={false} >
            <View style={{marginBottom:'5%'}}>
            <LinearProgress title='CONNECTOR UNION 1/2" SS-4-RX' percent={230}/>
            <LinearProgress title='CONNECTOR 1" Mx 1" M(SS)-4-RX' percent={90}/>
            <LinearProgress title='CONNECTOR 1/2" Mx 1/2" M(SS) 5K-4-RX' percent={130}/>
            <LinearProgress title='CONNECTOR 1/4" x 1/4"-4-RX' percent={300}/>
            <LinearProgress title='CONNECTOR 2" BSP MX 2" BSP M(SS)-4-RX' percent={190}/>
            <LinearProgress title='CONNECTOR2”M–21/2”M PLATED' percent={270}/>
            <LinearProgress title='CONNECTOR UNION 1" SS-4-RX' percent={220}/>
            <LinearProgress title='CONNECTOR UNION 2" BSP (SS)-4-RX' percent={190}/>
            <LinearProgress title='DIN CONNECTOR MEM207/S 2 EARTHING' percent={120}/>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default StatusScreen1

const styles = StyleSheet.create({})
