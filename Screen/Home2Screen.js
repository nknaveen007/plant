import React,{useEffect} from 'react'
import { StyleSheet, Text, View,Image,BackHandler } from 'react-native'
import HeaderView from '../Components/HeaderView'
import Home2Box from '../Components/Home2/Home2Box'

const Home2Screen = ({navigation}) => {
    
  
   
    return (
        <View style={{flex:1}}>
            <HeaderView navigation={navigation} Title={'Procurement'} IconFamily={'Ionicons'}/>
           
            <View style={{flex:1,alignItems:'center'}}>
                <Home2Box navigation={navigation} Title='Supplier PO Status'  value={'left'} nav={'Supplier'} fo={true}/>
                <Home2Box navigation={navigation} Title='Material Receipt Status'  value={'right'} nav={'Material'}/>
                <Home2Box navigation={navigation} Title='Plant Wise Material Receipt'  value={'left'} nav={'Plant'}/>

            </View>
           
        </View>
    )
}

export default Home2Screen

const styles = StyleSheet.create({})
