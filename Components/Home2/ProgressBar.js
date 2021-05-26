import React,{useState,useRef,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Title, Divider} from 'react-native-paper';
import { AnimatedCircularProgress} from 'react-native-circular-progress';



const ProgressBar = ({navigation,title,percent,nav,id,screen}) => {
const [per, setper] = useState(false)
const [color, setcolor] = useState({
  bColor:'white',
  tintColor:'white'
})

useEffect(() => {

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
  <Card style={{width:'90%',alignSelf:'center',marginBottom:'5%'}} onPress={()=>navigation.navigate(nav,{id:id,screen:screen,title:title})}>
    <Card.Content >
      <Text style={{fontFamily:'Lato_400Regular',fontSize:18}}>{title}</Text>
      <Divider style={{top:10,borderWidth:0.3,borderColor:'lightgray'}}/>
      <View style={{position:'relative'}}>
      <AnimatedCircularProgress
  size={130}
  width={25}
  fill={percent}
  tintColor={color.tintColor}
  onAnimationComplete={() => setper(true)}
  backgroundColor={color.bColor}
  style={{alignSelf:'center',marginTop:'8%',marginBottom:'2%'}}
  
 >
      {
    (fill) => (
      <Text style={{fontSize:18,fontFamily:'Lato_400Regular'}}>
        {Math.round((100* fill) / 100)}%
      </Text>
    )
  }
 </AnimatedCircularProgress>

  </View>    
  
      
    </Card.Content>
  </Card>
    )
}

export default ProgressBar

const styles = StyleSheet.create({})
