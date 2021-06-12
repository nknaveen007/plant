import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const TextInputView = ({lable,Type,secure,setText,text,eye}) => {
    const [passwordVisible, setpasswordVisible] = useState(false)
    const [securityVisible, setsecurityVisible] = useState(false)

    useEffect(() => {
        if(secure===false){
            setsecurityVisible(false)
        }else{
            setsecurityVisible(true) 
        }
    }, [])

    const check=()=>{
         if(securityVisible){
             setpasswordVisible(!passwordVisible)
             setsecurityVisible(!securityVisible)
         }else{
            setpasswordVisible(!passwordVisible)
            setsecurityVisible(!securityVisible)
         }
    }
   

    return (
        <View style={{marginTop:'5%'}}>
              <Text  style={{color:'#3a7dda',fontSize:14,marginBottom:2,fontFamily:'Lato_400Regular'}}>{lable}</Text>
              <View style={{flexDirection:'row'}}>
              <TextInput value={text} onChangeText={(text)=>setText(text)}  textContentType={Type} secureTextEntry={securityVisible} style={{borderWidth:1.5,height:43,width:'100%',borderRadius:10,color:'black',paddingLeft:20,fontSize:16,borderColor:'#3a7dda',fontFamily:'Lato_400Regular'}}/>
             {eye?<View style={{alignSelf:'center',right:'90%'}}>
              {passwordVisible?<MaterialIcons onPress={()=>check()} name="visibility" size={24} color="#3a7dda" />:
              <MaterialIcons onPress={()=>check()} name="visibility-off" size={24} color="#3a7dda" />
              
              }
             </View> :null}
              </View>
        </View>
    )
}

export default TextInputView

const styles = StyleSheet.create({})
