import React,{useState,useEffect,useref} from 'react'
import { StyleSheet, Text, View,ImageBackground,Image,ToastAndroid,Platform, TouchableOpacity, useWindowDimensions,Alert } from 'react-native'
import TextInputView from '../Components/Login/TextInput'
import { Button,Checkbox } from 'react-native-paper';
import validator from 'validator'
import instance from '../Api/api';
import LoadView from '../Components/LoadView';
import * as WebBrowser from 'expo-web-browser';
import {useToast} from "react-native-fast-toast";


const SignUpScreen = ({navigation}) => {
    const [nameText, setnameText] = useState('')
    const [emailText, setemailText] = useState('')
    const [passwordText, setpasswordText] = useState('')
    const [loader, setloader] = useState(false)
    const [checked, setChecked] = useState(false);
    const toast = useToast()
    const {width,height}=useWindowDimensions()

    const iostoast=(value)=>{
        if(Platform.OS=='android'){
            ToastAndroid.showWithGravityAndOffset(
                value,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50
              );
        }else{
        toast.show(value, {
            duration: 3000,
            style: { paddingHorizontal:20,borderRadius:20,backgroundColor:'#f2f0f0',bottom:'-13%',paddingVertical:15},
            textStyle: { fontSize: 14,color:'black'},
            
          });
    }
}

    const Validation=async()=>{
        if(nameText!=='' && emailText!=='' && passwordText!==''){
            const email=validator.isEmail(emailText)
            if(email){
                if(checked){
                    setloader(true)
                   try {
                    const result =await instance.post('/signUp',{
                        full_name:nameText,
                        email_id:emailText,
                        password:passwordText
                    })
                    setloader(false)
                    if(result.data.status==='true'){
                        Alert.alert(
                            "Alert",
                            result.data.message,
                            [
                              { text: "OK", onPress: () => navigation.navigate('Login') }
                            ]
                          );
                        
                    }else{
                        iostoast(result.data.message)
                    }
                    console.log(result.data) 
                   } catch (error) {
                       console.log(error)
                       alert(error)
                       setloader(false)
                   }
                    
                }else{
                    iostoast('Please select the Privacy Policy')
                }
            }else{
                iostoast('Please Enter the valid Email')
            }
        }else{
            iostoast('All fields are required')
        }
    }

    return (
        <View style={{flex:1}}>
        <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
            {loader?<LoadView/>:null}
           
            <View style={{width:'90%',height:'60%',position:'absolute',top:'30%',marginLeft:'5%',paddingTop:'10%'}}>

            
        <Text style={{color:'#3a7dda',fontSize:23,fontWeight:'bold',marginBottom:'1%',fontFamily:'Lato_700Bold'}}>SignUp</Text>
        <TextInputView lable={'Name'} Type={'name'} secure={false} setText={setnameText} text={nameText}/>
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

        <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => Validation()} color='#FFFFFF'  style={{borderColor:'#fff',width:120,borderWidth:1.5,marginTop:height-100,alignSelf:'flex-end',right:'5%'}}>
             SignUp
        </Button>
        </ImageBackground>
       
       

     </View>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({})
