import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { StateContext } from '../../context/Context'

const TopSelectorView = ({navigation,heading}) => {
    const [proMaintainer, setproMaintainer]=useContext(StateContext)

    const [overall, setoverall] = useState(true)
    const [text1, settext1] = useState(false)
    const [text2, settext2] = useState(false)
    const [text3, settext3] = useState(false)
    const [text4, settext4] = useState(false)

    const click=(value)=>{
        switch (value) {
            case 'overall':
                setproMaintainer('overall')
                setoverall(true)
                settext1(false)
                settext2(false)
                settext3(false)
                settext4(false)
                break;
 
            case 'text1':
                setproMaintainer('lot_1')
                 setoverall(false)
                 settext1(true)
                 settext2(false)
                 settext3(false)
                 settext4(false)
                 break;  
                 
                 case 'text2':
                    setproMaintainer('lot_2')
                 setoverall(false)
                 settext1(false)
                 settext2(true)
                 settext3(false)
                 settext4(false)
                 break; 
 
                 case 'text3':
                    setproMaintainer('lot_3')
                 setoverall(false)
                 settext1(false)
                 settext2(false)
                 settext3(true)
                 settext4(false)
                 break; 
 
                 
 
        
            default:
                break;
        }
     }

    return (
        <View>
        
           <View style={styles.TextContainer}>
               <TouchableOpacity onPress={()=>click('overall')} style={[styles.textView,{backgroundColor:overall?'#3a7dda':null}]}>
                 <Text  style={[styles.text,{color:overall?'#fff':'#949494',}]}>Overall</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>click('text1')} style={[styles.textView,{backgroundColor:text1?'#3a7dda':null}]}>
                    <Text  style={[styles.text],{color:text1?'#fff':'#949494'}}>Lot 1</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>click('text2')} style={[styles.textView,{backgroundColor:text2?'#3a7dda':null}]}>
                    <Text  style={[styles.text],{color:text2?'#fff':'#949494',}}>Lot 2</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>click('text3')} style={[styles.textView,{backgroundColor:text3?'#3a7dda':null}]}>
                    <Text  style={[styles.text],{color:text3?'#fff':'#949494'}}>Lot 3</Text>
               </TouchableOpacity>

               
              
         </View>

         <Text style={styles.HeadingText}>{heading}</Text>
               
           </View>
      
    )
}

export default TopSelectorView

const styles = StyleSheet.create({
    TextContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:'5%'

    },
    text:{
         width:50,
         alignSelf:'center',
         fontSize:17,
         width:'100%',
         textAlign:'center',
         fontFamily:'Lato_400Regular'
        
        
    },
    textView:{
        width:'20%',
        alignItems:'center',
        borderRadius:20,
        height:28,
        paddingVertical:4
    },
    HeadingText:{
        alignSelf:'center',
        marginTop:'5%',
        fontSize:18,
        fontFamily:'Lato_700Bold'
    }
})
