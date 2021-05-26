import React, { useContext,useEffect } from 'react'
import { Image, StyleSheet, Text, View,Alert,BackHandler } from 'react-native'
import { EvilIcons,Ionicons ,FontAwesome} from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/Context';



const HeaderView = ({navigation,Title,log,arrow}) => {
    const {signOut}=useContext(AuthContext)

    
        const logOut = () => {
          Alert.alert("Hold on!", "Are you sure you want to Logout?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => signOut() }
          ]);
          return true;
        };
    
       
      
   
  
    return (
        <View>
            <View style={[styles.headerContainer,{justifyContent:'center'}]}>
                {log?
                <View style={{position:'absolute',right:'5%',bottom:'25%'}}>
                    <FontAwesome onPress={()=>logOut()} name="power-off" size={24} color="#fff" />
                </View>:null}
                {arrow?null:<View style={{position:'absolute',left:'5%',bottom:'25%'}}>
                <Ionicons onPress={()=>navigation.goBack()} name="arrow-back-sharp" size={24} color="#fff" />
                </View>}
              <Text style={{color:'#fff',fontSize:20,fontFamily:'Lato_700Bold'}}>{Title}</Text>
                
              </View>
            
        </View>
    )
}

export default HeaderView

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#3a7dda',
        height:80,
        paddingTop:25,
        paddingHorizontal:'3%',
        
       
        
        
        
    },
    teximage:{
        width:10,
        height:11
    }
})
