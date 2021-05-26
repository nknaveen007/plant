import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import * as Progress from 'react-native-progress';
import {Divider} from 'react-native-paper';


const LinearProgress = ({title,percent}) => {
const {width}=useWindowDimensions()
const [prog, setprog] = useState(0)
const [color, setcolor] = useState({
    bColor:'white',
    tintColor:'white'
  })
  
  useEffect(() => {
    const value=percent/100
    setprog(value)
    if(percent>=75){
      setcolor({
        bColor:'gray',
        tintColor:'#009900'
      })
    }else if(percent>=50 && percent<75){
      setcolor({
        bColor:'gray',
        tintColor:'#FF9900'
      })
    }else if(percent<50){
      setcolor({
        bColor:'gray',
        tintColor:'#FF0000'
      })
    }
}, [percent])
 


    return (
        <View style={{marginVertical:'3.5%',marginHorizontal:'5%'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:'3%'}}>
                <Text style={{fontSize:12,fontFamily:'Lato_400Regular'}}>{title}</Text>
                <Text style={{fontFamily:'Lato_400Regular',fontSize:12}}>{percent}/100</Text>
            </View>
            <Progress.Bar color={color.tintColor} progress={prog} width={width*0.9} animated={true} animationType='timing' borderWidth={0.2} height={25} borderRadius={2} useNativeDriver={true} animationConfig={{ bounciness: 10 }} style={{backgroundColor:color.bColor,marginBottom:'2%'}}/>
            <Divider style={{top:5,borderWidth:0.3,borderColor:'lightgray'}}/>
        </View>
    )
}

export default LinearProgress

const styles = StyleSheet.create({})
