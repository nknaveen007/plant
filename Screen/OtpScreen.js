import React,{useState,useRef,useEffect, useContext} from 'react'
import { StyleSheet, Text, View ,ImageBackground, useWindowDimensions,Image,TextInput,Platform,ToastAndroid} from 'react-native'
import { Button } from 'react-native-paper';
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import instance from '../Api/api';
import LoadView from '../Components/LoadView';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/Context';
import {useToast} from "react-native-fast-toast";



const OtpScreen = ({navigation,route}) => {
    const {signIn}=useContext(AuthContext)
    const email=route.params
    const {width,height}=useWindowDimensions()
    const [value1,setvalue1]=useState(null)
    const [value2,setvalue2]=useState(null)
    const [value3,setvalue3]=useState(null)
    const [value4,setvalue4]=useState(null)
    const [loader, setloader] = useState(false)
    const toast = useToast()
 
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

         const iostoast=(value)=>{
            toast.show(value, {
                duration: 3000,
                style: { paddingHorizontal:20,borderRadius:20,backgroundColor:'#f2f0f0',bottom:'-13%',paddingVertical:15},
                textStyle: { fontSize: 14,color:'black'},
                
              });
        }

         

    

    const Validation=async()=>{
        if(Platform.OS==='android'){
            if(value1 && value2 && value3 && value4 !==''){
                const otp=`${value1}${value2}${value3}${value4}`
                setloader(true)
                try {
                    const result =await instance.post('/optconfirm',{
                        email:email,
                        otp:otp
                     })
                     if(result.data.status==='true'){
                        await AsyncStorage.setItem('token', 'true')
                        
                        ToastAndroid.showWithGravityAndOffset(
                            `${result.data.message}`,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                          );
                         
                          setloader(false)
                          signIn('hii')
                     }else{
                        ToastAndroid.showWithGravityAndOffset(
                            `${result.data.message}`,
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                          );
                         
                          setloader(false)
                     }

                     
                    
                } catch (error) {
                    setloader(false)
                alert('Network Error')
                    
                }
               
              
             
            }else{
                ToastAndroid.showWithGravityAndOffset(
                    'Please enter the OTP',
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                    25,
                    50
                  );
            }
        }else{
            if(value1 && value2 && value3 && value4 !==''){
                const otp=`${value1}${value2}${value3}${value4}`
                setloader(true)
                try {
                    const result =await instance.post('/optconfirm',{
                        email:email,
                        otp:otp
                     })
                     if(result.data.status==='true'){
                        await AsyncStorage.setItem('token', 'true')
                        iostoast(`${result.data.message}`)
                       
                          setloader(false)
                          signIn('hii')
                     }else{
                      iostoast(`${result.data.message}`)
                         
                          setloader(false)
                     }

                     
                    
                } catch (error) {
                    setloader(false)
                alert('Network Error')
                    
                }
            }else{
                iostoast('please enter the OTP')
                
            }
        }
       
    }


    return (
        <View style={{flex:1}}>
            {loader?<LoadView/>:null}
            <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
            <Image source={require('../assets/TataLogo.png')} style={{width:200,height:61,top:'35%',alignSelf:'center'}}/>
            <Text style={{color:'#3a7dda',fontSize:22,fontFamily:'Lato_700Bold',top:'40%',left:'5%'}}>OTP Verify</Text>
                <View style={{width:'75%',height:'60%',position:'absolute',top:'48%',paddingTop:'10%',alignSelf:'center'}}>
                     
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
<Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => Validation()} color='#FFFFFF'  style={{borderColor:'#fff',width:120,borderWidth:1.5,}}>
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
        paddingBottom:'3%',
        alignSelf:'center',
        width:'100%'
  
  
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
 