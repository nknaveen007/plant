import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import PlantVishView from '../../../Components/Home2/PlantVishView'
import { Button } from 'react-native-paper';
import GraphView from '../../../Components/Home2/GraphView';
import instance from '../../../Api/api';
import LoadView from '../../../Components/LoadView';
import TableView from '../../../Components/Home2/TableView';




const PlantWish = ({navigation}) => {
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState([])
    const [date, setdate] = useState([])
    const [arr1, setarr1] = useState([])
    const [arr2, setarr2] = useState([])
    const [arr3, setarr3] = useState([])
    const [loader, setloader] = useState(false)
    
    let date1=[]
    useEffect(() => {
        (async()=>{
            
            try {
                const result=await instance.post('/plantdatewise')
                const data=result.data.data
                setdata(data)
                setdata2(result.data.upper_value)
                
                } catch (error) {
                console.log(error)
                setloader(false)
                alert('Network Error')
            }
        })();
       
       
    }, [])
  
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
             <HeaderView navigation={navigation} Title={'Plant wise Material Receipt'} IconFamily={'Ionicons'}/>
            <View style={{width:'100%',height:'100%'}}>
             
              <PlantVishView title='Number of sets for which material completely received' data={data2.material_received}/>
              <PlantVishView title='Number of sets for which material received >75%' data={data2.material_received75}/>
              <PlantVishView title='Balance Sets Pending' data={data2.balance_pending}/>
              <TableView data={data}/>
              
            
           </View>
        </SafeAreaView>
    )
}

export default PlantWish

const styles = StyleSheet.create({})
