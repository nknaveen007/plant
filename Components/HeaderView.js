import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { EvilIcons,Ionicons } from '@expo/vector-icons'; 


const HeaderView = ({navigation,Title,arrow,tata}) => {
  
    return (
        <View>
            <View style={[styles.headerContainer,{justifyContent:'center'}]}>
                {arrow?null:
                <View style={{position:'absolute',left:'5%',bottom:'25%'}}>
                     <Ionicons name="arrow-back-sharp" size={24} color="#fff" onPress={()=>navigation.goBack()}/>    
                </View>}
              <Text style={{color:'#fff',fontSize:20,fontFamily:'Lato_700Bold'}}>{Title}</Text>
              {tata?<View style={{position:'absolute',right:'5%',bottom:'20%'}}>
                <Image source={require('../assets/tatalogo1.png')} style={{width:25,height:17,alignSelf:'center'}}/>
                <View style={{flexDirection:'row',marginTop:5}}>
                <Image source={require('../assets/t.png')} style={styles.teximage}/>
                <Image source={require('../assets/a.png')} style={styles.teximage}/>
                <Image source={require('../assets/t.png')} style={styles.teximage}/>
                <Image source={require('../assets/a.png')} style={styles.teximage}/>
                </View>
              </View>:null}
                    
                   
                
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
