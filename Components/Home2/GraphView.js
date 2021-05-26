import React,{useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, useWindowDimensions, View,Animated,ScrollView } from 'react-native'
import {LineChart} from "react-native-chart-kit";
import { Card,} from 'react-native-paper';
import instance from '../../Api/api';
import LoadView from '../LoadView';

const GraphView = ({date,a1,a2,a3}) => {

    const {width,height}=useWindowDimensions()
    const [loader, setloader] = useState(true)
    const [yaxis, setyaxis] = useState(false)
    
   useEffect(() => {
  /*  let ar1=[]
    let ar2=[]
    let ar3=[]
    data.map((value,index)=>{                   // we can use this comment in previous screen and pass the data to the component
      date1.push(value.date_wise)
      ar1.push(parseInt(value.as_per_plan))
      ar2.push(parseInt(value.anticipated))
      ar3.push(parseInt(value.contract_requirement))
    })

    setdate(date1)
    setarr1(ar1)
    setarr2(ar2)
    setarr3(ar3)   */
    setTimeout(() => {
      setloader(false)
      
     
   }, 500);
   }, [])

  

   
    return (
        <ScrollView style={{marginTop:'5%',width:'100%',marginHorizontal:'2%',}} horizontal>

{loader?<LoadView/>:
  
  <LineChart
    
    data={{
        labels: date,
  
        datasets: [
          {
            data: a1,
            color: (opacity = 1) => `#0094D8`, // optional
              strokeWidth: 2 // optional
          },
          {
              data: a2,
                color: (opacity = 1) => `#EB008A`, // optional
              strokeWidth: 2 // optional
          },
          {
            data: a3,
              color: (opacity = 1) => `gray`, // optional
            strokeWidth: 2 // optional
        },
       
        ]
      }}
      width={1000} // from react-native
    height={height*0.35}
    withDots
    withShadow
    chartConfig={{
      
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `gray`,
      labelColor: (opacity = 1) => `black`,
      style: {
        borderRadius: 10,
        
      },
      propsForDots: {
        r: "6",
        strokeWidth: "1",
        
      }
    }}
    bezier
    
    style={{
      marginVertical: 8,
      borderRadius: 10,
      overflow:'scroll'

    }}
  />}
</ScrollView>
    )
}

export default GraphView

const styles = StyleSheet.create({})
