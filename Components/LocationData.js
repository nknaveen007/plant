import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Divider} from 'react-native-paper';

const LocationData = ({state, city, Planned,location, installed}) => {
    return (
        <View style={{width:'90%',alignSelf:'center',marginTop:'7%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={styles.text}>State : {state}</Text>
                <Text style={styles.text}>City : {city}</Text>
                <Text style={styles.text}>Location : {location}</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:'3%'}}>
                <Text style={styles.text}>Plants Planned : {state}</Text>
                <Text style={styles.text}>Installed : {city}</Text>
            </View>
            <Divider style={{top:10,borderWidth:0.5,borderColor:'lightgray'}}/>
        </View>
    )
}

export default LocationData

const styles = StyleSheet.create({
    text:{
        fontSize:13,
        fontFamily:'Lato_400Regular'
    }
})
