import React from 'react'
import { StyleSheet, Text, View ,ImageBackground, useWindowDimensions,Image} from 'react-native'
import { Button } from 'react-native-paper';
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';

const IntroBackground = ({navigation}) => {
    const {width,height}=useWindowDimensions()

  
       

    let [fontsLoaded] = useFonts({
     Lato_900Black,Lato_400Regular,Lato_700Bold
      });
    
      if (!fontsLoaded) {
        return <AppLoading />;
      } 
    
    return (
        <View style={{flex:1,backgroundColor:'#3a7dda'}}>
            <ImageBackground style={{width:'100%',height:'100%'}} resizeMode='cover' source={require('../assets/ScreenBG1.png')}>
                <View style={{top:height*0.45,left:'5%'}}>
               <Image source={require('../assets/IntroIcon.png')} />
               <View style={{marginLeft:'3%'}}>
                   <Text style={{color:'#3a7dda',fontSize:28,fontFamily:'Lato_700Bold'}}>Lorem</Text>
                   <Text style={{color:'#3a7dda',fontSize:18,width:'40%',lineHeight:25,fontFamily:'Lato_400Regular'}}>consequat duis enim velit</Text>
               </View>
               </View>

               
<Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:17,fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Login')} color='#FFFFFF'  style={{borderColor:'#FFFFFF',width:135,borderWidth:1.5,position:'absolute',bottom:'8%',right:'5%'}}>
    Get Started
  </Button>
               
            </ImageBackground>
        </View>
    )
    }

export default IntroBackground

const styles = StyleSheet.create({})
