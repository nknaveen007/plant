import { View, useWindowDimensions, ImageBackground, TouchableOpacity ,StyleSheet} from 'react-native';
import React,{useState} from 'react';

const MapView = () => {
    const {width,height}=useWindowDimensions()
    const [text, settext] = useState('')

    const alertCall=(name)=>{
        alert(`${name}`)
     }

    return (
      
         
      <ImageBackground  source={require('../assets/map.jpg')} style={{width:350,height:500,position:'relative',alignSelf:'center'}}>
         
           <TouchableOpacity onPress={()=>alertCall('Maharastra')} style={[{width:100,height:50,position:'absolute',bottom:'34%',left:'12%',transform:[{rotateZ:'-20deg'}],borderBottomRightRadius:200,borderTopRightRadius:50,borderTopLeftRadius:100},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Rajasthan')} style={[{width:80,height:80,position:'absolute',position:'absolute',top:'32%',left:'5%',transform:[{rotateZ:'160deg'}],borderRadius:50},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Gujarat')} style={[{width:65,height:65,position:'absolute',position:'absolute',top:'46%',transform:[{rotateZ:'160deg'}],borderRadius:50},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Madhya Pradesh')} style={[{width:100,height:50,position:'absolute',position:'absolute',top:'45%',left:'20%',transform:[{rotateZ:'-10deg'}],borderRadius:20},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Andhra Pradesh')} style={[{width:90,height:40,position:'absolute',position:'absolute',bottom:'25%',left:'24%',transform:[{rotateZ:'-90deg'}],borderRadius:20},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Karnataka')} style={[{width:80,height:40,position:'absolute',position:'absolute',bottom:'20%',left:'13%',transform:[{rotateZ:'-90deg'}],borderTopRightRadius:20,borderTopLeftRadius:50},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Tamil Nadu')} style={[{width:55,height:35,position:'absolute',position:'absolute',bottom:'11%',left:'27%',transform:[{rotateZ:'-70deg'}],borderRadius:20,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Kerala')} style={[{width:55,height:13,position:'absolute',position:'absolute',bottom:'11%',left:'19%',transform:[{rotateZ:'70deg'}],borderRadius:20,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Odisha')} style={[{width:65,height:35,position:'absolute',position:'absolute',bottom:'38%',right:'32%',transform:[{rotateZ:'-30deg'}],borderRadius:20,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Chhattisgarh')} style={[{width:85,height:25,position:'absolute',position:'absolute',bottom:'41%',left:'36%',transform:[{rotateZ:'-65deg'}],borderTopStartRadius:40,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('West Bengal')} style={[{width:35,height:35,position:'absolute',position:'absolute',bottom:'44.8%',right:'24%',transform:[{rotateZ:'-30deg'}],borderRadius:30,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Jharkhand')} style={[{width:45,height:25,position:'absolute',position:'absolute',bottom:'48%',right:'31.5%',transform:[{rotateZ:'-30deg'}],borderRadius:10, },styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Bihar')} style={[{width:50,height:30,position:'absolute',position:'absolute',top:'40%',right:'30%',transform:[{rotateZ:'-10deg'}],borderRadius:10},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Uttar Pradesh')} style={[{width:90,height:40,position:'absolute',position:'absolute',top:'35%',left:'30%',transform:[{rotateZ:'25deg'}],borderRadius:10},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Haryana')} style={[{width:30,height:30,position:'absolute',position:'absolute',top:'29%',left:'22.5%',transform:[{rotateZ:'25deg'}],borderRadius:20},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Punjab')} style={[{width:30,height:30,position:'absolute',position:'absolute',top:'24%',left:'19%',transform:[{rotateZ:'25deg'}],borderRadius:20},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Himachal Pradesh')} style={[{width:33,height:30,position:'absolute',position:'absolute',top:'20%',left:'25%',transform:[{rotateZ:'25deg'}],borderRadius:10},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Uttarakhand')} style={[{width:38,height:25,position:'absolute',position:'absolute',top:'26.5%',left:'32.5%',transform:[{rotateZ:'25deg'}],borderRadius:10},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Jammu & Kashmir')} style={[{width:70,height:50,position:'absolute',position:'absolute',top:'10%',left:'18%',transform:[{rotateZ:'-10deg'}],borderTopRightRadius:40},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Meghalaya')} style={[{width:34,height:14,position:'absolute',position:'absolute',bottom:'55%',right:'10%',transform:[{rotateZ:'1deg'}],borderRadius:10,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Assam')} style={[{width:55,height:15,position:'absolute',position:'absolute',bottom:'57.5%',right:'4%',transform:[{rotateZ:'1deg'}],borderRadius:10,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Arunachal Pradesh')} style={[{width:45,height:18,position:'absolute',position:'absolute',top:'34.3%',right:0,transform:[{rotateZ:'-25deg'}],borderRadius:5},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Tripura')} style={[{width:15,height:15,position:'absolute',position:'absolute',top:'47.5%',right:'11%',transform:[{rotateZ:'-30deg'}],borderRadius:30,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Mizoram')} style={[{width:12,height:25,position:'absolute',position:'absolute',top:'47.8%',right:'7.5%',transform:[{rotateZ:'0deg'}],borderRadius:0,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Nagaland')} style={[{width:14,height:20,position:'absolute',position:'absolute',top:'40%',right:'1%',transform:[{rotateZ:'40deg'}],borderRadius:0,},styles.borderw]}></TouchableOpacity>
           <TouchableOpacity onPress={()=>alertCall('Manipur')} style={[{width:18,height:20,position:'absolute',position:'absolute',top:'44%',right:'3%',transform:[{rotateZ:'15deg'}],borderRadius:0,},styles.borderw]}></TouchableOpacity>
      </ImageBackground>
  
    )
}

export default MapView

const styles = StyleSheet.create({
    borderw:{
      borderWidth:0
    }
})
