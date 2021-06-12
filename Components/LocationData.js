import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Divider} from 'react-native-paper';

const LocationData = ({state, city, Planned,location, installed}) => {
    return (
        <View style={{width:'90%',alignSelf:'center',marginTop:'7%'}}>
            <View style={styles.textrowview}>
               <Text style={styles.text}>City  /  State </Text>
               <Text style={styles.textvalue}>: {city}  / {state}</Text>
            </View>
            <View style={styles.textrowviewlocation}>
               <Text style={styles.text}>Location</Text>
               <Text >:</Text>
               <Text style={styles.textvalueLocation}>{location}</Text>
            </View>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <View style={styles.textrowview}>
               <Text style={styles.text}>Plants Planned  </Text>
               <Text style={styles.textvalue}>:   {Planned}</Text>
            </View>
            <View style={styles.textrowview}>
               <Text style={styles.text}>Installed </Text>
               <Text style={styles.textvalue}>:  {installed}</Text>
            </View>
         </View>
           
          
            <Divider style={{top:10,borderWidth:0.5,borderColor:'lightgray'}}/>
        </View>
    )
}

export default LocationData

const styles = StyleSheet.create({
    text:{
        fontSize:14,
        fontFamily:'Lato_700Bold',
        width:110
    },
    textrowview:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'3%'
    },
    textvalue:{
        fontFamily:'Lato_400Regular'
    },
    textvalueLocation:{
        fontFamily:'Lato_400Regular',
        flex:2,
        left:3
    },
    textrowviewlocation:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'3%',
        
        
    }
})
