import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'


const Home2Box = ({navigation,Title,image,value,nav}) => {

   switch (value) {
       case 'left':
           return <TouchableOpacity style={styles.MainView} onPress={()=>navigation.navigate(nav)}>
           <View style={styles.imageview}>
               <Image source={image} style={styles.image}/>
               <Text style={styles.Text}>{Title}</Text>
           </View>
        </TouchableOpacity>

        case 'right':
            return <TouchableOpacity style={styles.MainView} onPress={()=>navigation.navigate(nav)}>
            <View style={styles.imageview}>
                <Text style={styles.Text}>{Title}</Text>
                <Image source={image} style={styles.image2}/>
               
            </View>
         </TouchableOpacity>
           
   
       default:
           return null;
   }
    

    
}

export default Home2Box

const styles = StyleSheet.create({
    MainView:{
        backgroundColor:'#3a7dda',
        width:'95%',
        height:90,
        marginTop:'5%',
        borderRadius:4
    },
    imageview:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    image:{
       width:70,
       height:70,
       right:'10%'
       
    },
    Text:{
        color:'#fff',
        fontSize:19,
        height:'100%',
        width:'60%',
        textAlignVertical:'center',
        fontFamily:'Lato_700Bold'
        
    },
    image2:{
        
            width:70,
            height:70,
            left:'10%'
           
        
    }
   
})
