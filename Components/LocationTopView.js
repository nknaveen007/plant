import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';

const LocationTopView = ({navigation}) => {
    return (
        <View style={{marginTop:'3%'}}>
           <TouchableOpacity style={{flexDirection:'row',marginHorizontal:'3%',justifyContent:'space-between',borderWidth:1,paddingVertical:'2.3%',paddingHorizontal:'2%',borderColor:'rgba(0, 0, 0, 0.28)'}}>
               <Text style={{fontSize:15,fontFamily:'Lato_400Regular'}}>Select State</Text>
               <MaterialIcons name="navigate-next" size={24} color="black" />
           </TouchableOpacity>
           <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:16,color:'#3a7dda',fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Icmap')} color='#FFFFFF'  style={{borderColor:'#3a7dda',width:180,borderWidth:1,borderRadius:10,alignSelf:'center',marginTop:'3%'}}>
               Show MP Data
           </Button>
        </View>
    )
}

export default LocationTopView

const styles = StyleSheet.create({})
