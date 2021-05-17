import React from 'react'
import { StyleSheet, Text, View,ImageBackground,Image } from 'react-native'
import TextInputView from '../Components/Login/TextInput'
import { Button } from 'react-native-paper';
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

const LoginScreen = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        Lato_900Black,Lato_400Regular,Lato_700Bold
         });
       
         if (!fontsLoaded) {
           return <AppLoading />;
         } 

    return (
        <View style={{flex:1}}>
           <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
               <Image source={require('../assets/TataLogo.png')} style={{width:151,height:46,top:'35%',alignSelf:'center'}}/>
               <View style={{width:'75%',height:'60%',position:'absolute',top:'41%',marginLeft:'5%',paddingTop:'10%'}}>

               
           <Text style={{color:'#3a7dda',fontSize:25,fontWeight:'bold',marginBottom:'1%',fontFamily:'Lato_700Bold'}}>Login</Text>
           <TextInputView lable={'Email'} Type={'emailAddress'} secure={false} />
           <TextInputView lable={'Password'} Type={'password'} secure={true}/>
            
            <Text style={{color:'#3a7dda',fontSize:13,fontWeight:'700',alignSelf:'flex-end',marginTop:'4%',fontFamily:'Lato_700Bold'}}>Forgot Password?</Text>
           
           </View>

 
           </ImageBackground>
           <View style={{marginTop:'160%',position:'absolute',right:'5%'}}>
           <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Otp')} color='#FFFFFF'  style={{borderColor:'#fff',width:120,borderWidth:1.5,}}>
    Login
  </Button>
  </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
