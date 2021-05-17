import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../Components/HeaderView'
import Home2Box from '../../Components/Home2/Home2Box'


const InstallationScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{height:'100%'}}>
             <HeaderView navigation={navigation} Title={'Installation & Commissioning'} IconFamily={'Ionicons'}/>
             <View style={{flex:1,alignItems:'center',marginTop:'5%'}}>
                <Home2Box navigation={navigation} Title='I&C Status & plan' image={require('../../assets/galleryIcon.png')} value={'left'} nav={'Icstatus'}/>
                <Home2Box navigation={navigation} Title='I&C Location wise details' image={require('../../assets/galleryIcon.png')} value={'right'} nav={'Iclocation'}/>
             </View>
        </SafeAreaView>
    )
}

export default InstallationScreen

const styles = StyleSheet.create({})
