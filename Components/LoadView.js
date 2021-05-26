import React,{useState} from 'react'
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native'
import {Overlay } from 'react-native-elements'

const LoadView = ({}) => {
    const [visible, setVisible] = useState(true);  //overly
    
    return (
        <Overlay isVisible={visible}  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <ActivityIndicator size="large" color="#3a7dda" />
      </Overlay>
    )
}

export default LoadView

const styles = StyleSheet.create({})
