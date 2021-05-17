import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import * as Progress from 'react-native-progress';
import {Divider} from 'react-native-paper';


const LinearProgress = ({title,percent}) => {
    const {width}=useWindowDimensions()
const [prog, setprog] = useState(0)

useEffect(() => {
    const value=percent/322
    
   setTimeout(() => {
       setprog(value)
   }, 200);
}, [])
    return (
        <View style={{marginTop:'7%',marginHorizontal:'5%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:'3%'}}>
                <Text style={{fontSize:13,fontFamily:'Lato_400Regular'}}>{title}</Text>
                <Text style={{fontFamily:'Lato_400Regular'}}>{percent}/322</Text>
            </View>
            <Progress.Bar progress={prog} width={width*0.9} animated={true} animationType='timing' borderWidth={0.2} height={25} borderRadius={2} useNativeDriver={true} animationConfig={{ bounciness: 10 }} style={{backgroundColor:'#97BFF6',marginBottom:'2%'}}/>
            <Divider style={{top:5,borderWidth:0.3,borderColor:'lightgray'}}/>
        </View>
    )
}

export default LinearProgress

const styles = StyleSheet.create({})
