import React,{useState,useEffect, useContext} from 'react'
import { StyleSheet, Text, View,Image} from 'react-native'
import instance from '../Api/api'
import HeaderView from '../Components/HeaderView'
import HomeView from '../Components/Home/HomeView'
import LoadView from '../Components/LoadView'
import {Lato_400Regular,Lato_700Bold,Lato_900Black,useFonts,Lato_700Bold_Italic,Lato_400Regular_Italic} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';


const HomeScreen = ({navigation}) => {
  
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(false)

    let [fontsLoaded] = useFonts({
        Lato_900Black,Lato_400Regular,Lato_700Bold,Lato_700Bold_Italic,Lato_400Regular_Italic
         });
       

    
   


    useEffect(() => {
        (async()=>{
            try {
                setloader(true)
                const result=await instance.post('/homedata')
                const data=result.data.data[0]
                setdata(data)
                setloader(false)
            } catch (error) {
                console.log(error)
                setloader(false)
                alert('Network Error')
            }
            
        })();
       
       
    }, [])

    if (!fontsLoaded) {
        return <AppLoading />;
      } 
    
    return (
        <View style={{flex:1}}>
           <HeaderView navigation={navigation} Title={'Home'} log={true} tata={true} arrow={true}/>
         {loader?<LoadView/>:
         <View style={{width:'100%',height:'100%'}}>
           <Image source={require('../assets/TataLogo.png')} style={{width:200,height:61,alignSelf:'center',top:'3%'}}/>

           <View style={{flex:1,marginTop:'10%',alignItems:'center'}}>
               <HomeView Title={'Procurement'} Text1={`${data.procurement_placed} procurement placed`} Text2={`${data.procurement_sets_completed} Sets completed`} navigation={navigation} ButtonName={'Track'} nav='Procurement'/>
               <HomeView Title={'Manufacturing'} Text1={`${data.manufacturing_sets_completed} sets completed`} Text2={`${data.manufacturing_sets_under_progress} sets under progress`} navigation={navigation} ButtonName={'Track'} nav='Manufacture'/>
               <HomeView Title={'Despatches'} Text1={`${data.despatched_sets} despatched sets`} Text2={''} navigation={navigation} ButtonName={'Track'} nav='Despatch'/>
               <HomeView Title={'Installation & Commissioning'} Text1={`${data.sets_delivered} sets delivered`} Text2={''} navigation={navigation} ButtonName={'Track'} nav='Install'/>
           </View>
           </View>
           }

           
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
