import React,{useEffect, useState, useRef} from 'react'
import { StyleSheet, Text, useWindowDimensions, View,Animated } from 'react-native'
import {LineChart} from "react-native-chart-kit";
import { Card,} from 'react-native-paper';

const GraphView = () => {

    const {width,height}=useWindowDimensions()
    
const [arr1, setarr1] = useState([0])
const [arr2, setarr2] = useState([0])
  useEffect(() => {

    setTimeout(() => {
        setarr1([0,10,12,18,40])
        setarr2([10,25,23,5,10])
        
    }, 100);

  }, []);

   
    return (
        <View style={{marginTop:'5%',width:width*0.95,marginHorizontal:'2%'}}>


  
  <LineChart
    
    data={{
        labels: ["5/13/21", "5/28/21", "6/12/21", "6/27/21", "7/12/21"],
  
        datasets: [
          {
            data: arr1,
            color: (opacity = 1) => `#0094D8`, // optional
              strokeWidth: 2 // optional
          },
          {
              data: arr2,
                color: (opacity = 1) => `#EB008A`, // optional
              strokeWidth: 2 // optional
          }
        ]
      }}
    width={width*0.95} // from react-native
    height={height*0.35}
    yAxisInterval={10} // optional, defaults to 1
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
      

    }}
  />
</View>
    )
}

export default GraphView

const styles = StyleSheet.create({})
