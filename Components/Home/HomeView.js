import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper';

const HomeView = ({navigation,Title,Text1,Text2,ButtonName,nav}) => {
   
    return (
        <View style={styles.MainView}>
            <View style={styles.TextView}>
              <Text style={styles.Title}>{Title}</Text>
              <Text style={styles.Text1}>{Text1}</Text>
              <Text style={styles.Text2}>{Text2}</Text>
            </View>

            <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:14,fontFamily:'Lato_700Bold'}} onPress={() =>navigation.navigate(nav)} color='#FFFFFF'  style={{borderColor:'#FFFFFF',borderWidth:1.5,marginRight:'5%',height:'50%',alignSelf:'center'}}>
               {ButtonName}
            </Button>
        </View>
    )
}

export default HomeView

const styles = StyleSheet.create({
MainView:{
    width:'96%',
    height:80,
    backgroundColor:'#3a7dda',
    borderRadius:4,
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'4%'
    },
TextView:{
     marginTop:'1.5%',
     marginHorizontal:'3%'
},
Title:{
    color:'#fff',
    fontSize:17.5,
    marginBottom:'1.5%',
    fontFamily:'Lato_700Bold'
    
    
},
Text1:{
    color:'#fff',
    fontSize:12,
    marginLeft:'3%',
    lineHeight:18,
    fontFamily:'Lato_400Regular'
},
Text2:{
    color:'#fff',
    fontSize:12,
    marginLeft:'3%',
    lineHeight:18,
    fontFamily:'Lato_400Regular'
}
})
