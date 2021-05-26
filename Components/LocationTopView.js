import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {BlurView} from 'expo-blur'


const LocationTopView = ({navigation,setstateView,buttonView,maintainerData,filterData,setdata,setbuttonView,setmaintainerData}) => {
    return (
        <View style={{marginTop:'3%',flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity onPress={()=>setstateView(true)} style={{flexDirection:'row',marginHorizontal:'3%',justifyContent:'space-between',borderWidth:1,paddingVertical:'2.3%',paddingHorizontal:'2%',borderColor:'rgba(0, 0, 0, 0.28)',alignItems:'center',flex:1}}>
                      <Text style={{fontSize:15,fontFamily:'Lato_400Regular'}}>Select State</Text>
                      <MaterialIcons name="navigate-next" size={24} color="black" style={{}}/>
                 </TouchableOpacity>

            <View style={{}}>
            
            
                 {maintainerData===''?null:
                
                
                
                  <MaterialCommunityIcons onPress={()=>{
                        setmaintainerData('')
                        setbuttonView(false)
                        setdata(filterData)
                 }} style={{alignSelf:'center',marginRight:'5%',right:'5%',opacity:0.5,}}  name="filter-remove-outline" size={30} color="#3a7dda" />
                 
                }
                
            </View>
       
        </View>
    )
}

export default LocationTopView

const styles = StyleSheet.create({
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})
