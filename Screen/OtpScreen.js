import React,{useState,useRef} from 'react'
import { StyleSheet, Text, View ,ImageBackground, useWindowDimensions,Image,TextInput} from 'react-native'
import { Button } from 'react-native-paper';
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';



const OtpScreen = ({navigation}) => {
    const {width,height}=useWindowDimensions()
    const [value1,setvalue1]=useState(null)
    const [value2,setvalue2]=useState(null)
    const [value3,setvalue3]=useState(null)
    const [value4,setvalue4]=useState(null)
 
    const input1=useRef()
    const input2=useRef()
    const input3=useRef()
    const input4=useRef()

    let [fontsLoaded] = useFonts({
        Lato_900Black,Lato_400Regular,Lato_700Bold
         });
       
         if (!fontsLoaded) {
           return <AppLoading />;
         } 
    
    return (
        <View style={{flex:1,backgroundColor:'#3a7dda'}}>
            <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
            <Image source={require('../assets/TataLogo.png')} style={{width:151,height:46,top:'35%',alignSelf:'center'}}/>
                <View style={{width:'75%',height:'60%',position:'absolute',top:'43%',marginLeft:'5%',paddingTop:'10%'}}>
                     <Text style={{color:'#3a7dda',fontSize:25,marginBottom:'1%',fontFamily:'Lato_700Bold'}}>OTP Verify</Text>
                     <View style={styles.inputContainer}>
                    <View style={styles.inputView1}>
                        <TextInput

                      
                        autoFocus={false}
                        ref={input1}
                        placeholder='0'
                        style={styles.textInput1}
                        maxLength={1}
                        onChangeText={(value)=>
                           {
                            setvalue1(value)
                            if(value===''){
                                input1.current.focus()
                            }
                            else{
                                input2.current.focus()
                                
                            }
                           }
                        }
                        value={value1}
                        keyboardType='phone-pad'
                        />
                     </View>

                     <View style={styles.inputView1}>
                        <TextInput
                        ref={input2}
                        placeholder='0'
                         style={styles.textInput1}
                        maxLength={1}
                        onChangeText={(value)=>{
                            setvalue2(value)
                            if(value===''){
                                input2.current.focus()
                            }
                            else{
                                input3.current.focus()
                            }
                        }}
                        value={value2}
                        keyboardType='phone-pad'
                        />
                     </View>

                     <View style={styles.inputView1}>
                        <TextInput
                        ref={input3}
                        placeholder='0'
                         style={styles.textInput1}
                        maxLength={1}
                        onChangeText={(value)=>{
                            setvalue3(value)
                            if(value===''){
                                input3.current.focus()
                            }
                            else{
                                input4.current.focus()
                            }
                        }}
                        value={value3}
                        keyboardType='phone-pad'
                        />
                     </View>

                     <View style={styles.inputView1}>
                        <TextInput
                        ref={input4}
                        placeholder='0'
                         style={styles.textInput1}
                        maxLength={1}
                        onChangeText={(value)=>setvalue4(value)}
                        value={value4}
                        keyboardType='phone-pad'
                        />
                     </View>
                    
                </View> 
           
                </View>
               
            </ImageBackground>
            <View style={{marginTop:'160%',position:'absolute',right:'5%'}}>
<Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Home')} color='#FFFFFF'  style={{borderColor:'#fff',width:120,borderWidth:1.5,}}>
    Verify
  </Button>
  </View>
        </View>
    )
    }

export default OtpScreen

const styles = StyleSheet.create({

    inputContainer:{
        flexDirection:'row',
        paddingTop:'13%',
        paddingBottom:'3%'
  
  
      },
      inputView1:{
          
          width:45,
          height:50,
          marginHorizontal:'4%',
          justifyContent:'center',
          alignItems:'center',
          borderColor:'#E0E0E0',
          borderBottomWidth:1.2,
          borderBottomColor:'#3a7dda'
  
  
      },
      textInput1:{
          
          width:50,
          height:50,
         fontSize:23,
          textAlign:'center',
          fontFamily:'Lato_400Regular'
        
          
      },
      buttonStyle:{
         
          color:'#FFFCFC',
          fontSize:16,
         alignSelf:'center',
          marginVertical:13,
          
       
          
      },
});
 