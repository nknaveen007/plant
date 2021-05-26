import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  Divider} from 'react-native-paper';

const PlantVishView = ({title,data}) => {
    return (
        <View style={{marginHorizontal:'4%',marginTop:'5%'}}>
            <Text style={{fontSize:13,fontFamily:'Lato_400Regular'}}>{title}</Text>
            <Text style={{alignSelf:'flex-start',fontSize:20,marginTop:'4%',fontFamily:'Lato_700Bold'}}>{data}</Text>
            <Divider style={{top:15,borderWidth:0.3,borderColor:'lightgray'}}/>
        </View>
    )
}

export default PlantVishView

const styles = StyleSheet.create({})
