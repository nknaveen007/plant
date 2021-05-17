import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import HeaderView from '../Components/HeaderView'
import Home2Box from '../Components/Home2/Home2Box'

const Home2Screen = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <HeaderView navigation={navigation} Title={'Procurement'} IconFamily={'Ionicons'}/>
            <View style={{flex:1,alignItems:'center',marginTop:'10%'}}>
                <Home2Box navigation={navigation} Title='Supplier PO Status' image={require('../assets/galleryIcon.png')} value={'left'} nav={'Supplier'}/>
                <Home2Box navigation={navigation} Title='Material Receipt Status' image={require('../assets/galleryIcon.png')} value={'right'} nav={'Material'}/>
                <Home2Box navigation={navigation} Title='Plant Wise Material Receipt' image={require('../assets/galleryIcon.png')} value={'left'} nav={'Plant'}/>

            </View>
            <Image source={require('../assets/TataLogo.png')} style={{width:151,height:46,alignSelf:'center',bottom:15}}/>
        </View>
    )
}

export default Home2Screen

const styles = StyleSheet.create({})
