import React from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'


const TextInputView = ({lable,Type,secure}) => {

    return (
        <View style={{marginTop:'5%'}}>
              <Text  style={{color:'#3a7dda',fontSize:14,marginBottom:2,fontFamily:'Lato_400Regular'}}>{lable}</Text>
              <TextInput textContentType={Type} secureTextEntry={secure} style={{borderWidth:1.5,height:45,width:'100%',borderRadius:10,color:'black',paddingLeft:20,fontSize:16,borderColor:'#3a7dda',fontFamily:'Lato_400Regular'}}/>
        </View>
    )
}

export default TextInputView

const styles = StyleSheet.create({})
