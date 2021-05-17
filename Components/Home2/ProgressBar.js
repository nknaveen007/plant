import React,{useState,useRef,useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Title, Divider} from 'react-native-paper';
import { AnimatedCircularProgress} from 'react-native-circular-progress';



const ProgressBar = ({navigation,title,percent,nav}) => {
const [per, setper] = useState(false)





return (
  <Card style={{width:'90%',alignSelf:'center',marginTop:'5%',}} onPress={()=>navigation.navigate(nav)}>
    <Card.Content >
      <Title style={{fontFamily:'Lato_700Bold'}}>{title}</Title>
      <Divider style={{top:10,borderWidth:0.3,borderColor:'lightgray'}}/>
      <View style={{position:'relative'}}>
      <AnimatedCircularProgress
  size={130}
  width={25}
  fill={percent}
  tintColor="#3a7dda"
  onAnimationComplete={() => setper(true)}
  backgroundColor="#97BFF6"
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
