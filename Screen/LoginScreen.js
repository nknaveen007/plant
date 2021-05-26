import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,ToastAndroid,Platform, TouchableOpacity } from 'react-native'
import TextInputView from '../Components/Login/TextInput'
import { Button,Checkbox } from 'react-native-paper';
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts,Lato_700Bold_Italic,Lato_400Regular_Italic} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import validator from 'validator'
import instance from '../Api/api';
import LoadView from '../Components/LoadView';
import * as WebBrowser from 'expo-web-browser';

const LoginScreen = ({navigation}) => {
     
    const [emailText, setemailText] = useState('')
    const [passwordText, setpasswordText] = useState('')
    const [loader, setloader] = useState(false)
    const [checked, setChecked] = React.useState(false);

    let [fontsLoaded] = useFonts({
        Lato_900Black,Lato_400Regular,Lato_700Bold,Lato_700Bold_Italic,Lato_400Regular_Italic
         });
       
        


         const Validation=async()=>{
             if(Platform.OS==='android'){
                if(emailText!==''){
                    let value=validator.isEmail(emailText)
                   if(value){
                      if(passwordText!==''){
                          if(checked){
                            setloader(true)
                            try {
                                const result =await instance.post('/userLogin',{
                                    email:emailText,
                                    password:passwordText
                                })
                                console.log(result.data)
                               if(result.data.status==='true'){
                                   ToastAndroid.showWithGravityAndOffset(
                                       `${result.data.message}`,
                                       ToastAndroid.LONG,
                                       ToastAndroid.BOTTOM,
                                       25,
                                       50
                                     );
                                     setloader(false)
                                     navigation.navigate('Otp',{email:emailText})
                               }else{
                                   setloader(false)
                                  ToastAndroid.showWithGravityAndOffset(
                                      `${result.data.message}`,
                                      ToastAndroid.LONG,
                                      ToastAndroid.BOTTOM,
                                      25,
                                      50
                                    );
                                  
                               }
                                
                            } catch (error) {
                                console.log(error)
                            }
                          }else{
                            ToastAndroid.showWithGravityAndOffset(
                                'Please Select Privacy Policy',
                                ToastAndroid.LONG,
                                ToastAndroid.BOTTOM,
                                25,
                                50
                              );
                          }
                         
                      }else{
                        ToastAndroid.showWithGravityAndOffset(
                            'Please enter the password',
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50
                          );
                          
                      }
                   }else{
                    ToastAndroid.showWithGravityAndOffset(
                        'Please enter the valid email',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                      );
                       console.log()
                   }
                }else{
                    ToastAndroid.showWithGravityAndOffset(
                        'Please enter the email',
                        ToastAndroid.LONG,
                        ToastAndroid.BOTTOM,
                        25,
                        50
                      );
                    console.log()
                }
             }else{
                if(emailText!==''){
                    let value=validator.isEmail(emailText)
                   if(value){
                      if(passwordText!==''){
                          if(checked){
                            try {
                                const result =await instance.post('/userLogin',{
                                    email:emailText,
                                    password:passwordText
                                })
                               if(result.data.status==='true'){
                                   console.log(result.data)
                               }else{
                                  
                                console.log(result.data.message)
                                  
                               }
                                
                            } catch (error) {
                                console.log(error)
                            }
                          }
                        
                      }else{
                          console.log('please enter the password')
                      }
                   }else{
                       console.log('please enter the valid email')
                   }
                }else{
                    console.log('please enter the email')
                }
             }
           
         }

         if (!fontsLoaded) {
            return <AppLoading />;
          } 

    return (
        <View style={{flex:1}}>
           <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
               {loader?<LoadView/>:null}
               <Image source={require('../assets/TataLogo.png')} style={{width:200,height:61,top:'35%',alignSelf:'center'}}/>
               <View style={{width:'90%',height:'60%',position:'absolute',top:'41%',marginLeft:'5%',paddingTop:'10%'}}>

               
           <Text style={{color:'#3a7dda',fontSize:23,fontWeight:'bold',marginBottom:'1%',fontFamily:'Lato_700Bold'}}>Login</Text>
           <TextInputView lable={'Email'} Type={'emailAddress'} secure={false} setText={setemailText} text={emailText}/>
           <TextInputView lable={'Password'} Type={'password'} secure={true} setText={setpasswordText} eye={true} text={passwordText}/>
            
           <View style={{alignSelf:'flex-start',marginTop:'2%',flexDirection:'row',alignItems:'center'}}>
           <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      color='#3a7dda'
      onPress={() => {
        setChecked(!checked);
      }}
    />
               <TouchableOpacity style={{}} onPress={async()=>await WebBrowser.openBrowserAsync('https://www.tataadvancedsystems.com/static.php?id=2#:~:text=Privacy%20Policy&text=TASL%20reserves%20its%20right%20to,disallowance%20of%20access%20to%20Site')}>
                    <Text style={{color:'#3a7dda',fontSize:14,fontWeight:'700',fontFamily:'Lato_400Regular',textDecorationStyle:'dashed',textDecorationLine:'underline',padding:5}} >Privacy Policy</Text>
               </TouchableOpacity>

           </View>
           

           </View>

 
           </ImageBackground>
           <View style={{marginTop:'160%',position:'absolute',right:'5%'}}>
           <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => Validation()} color='#FFFFFF'  style={{borderColor:'#fff',width:120,borderWidth:1.5,}}>
                Login
           </Button>
  </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
