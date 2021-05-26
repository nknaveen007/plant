import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView } from 'react-native'
import HeaderView from '../../Components/HeaderView'
import PlantVishView from '../../Components/Home2/PlantVishView'
import CalanderView from '../../Components/CalanderView'
import instance from '../../Api/api'
import ModalView from '../../Components/ModalView'
import LoadView from '../../Components/LoadView'

const ManufacturingScrenn = ({navigation}) => {

    const [data, setdata] = useState([])
    const [data2, setdata2] = useState({})
    const [marked, setmarked] = useState({})
    const [loader, setloader] = useState(false)
  


    useEffect(() => {
        
        (async()=>{
            setloader(true)
            try {
                const result=await instance.post('/manfacturedatewise')
                const data=result.data.data
                setdata(data)
                setdata2(result.data.upper_value)
               let markObject={}
                data.map((value,index)=>{
                 
                 markObject[value.date_wise]={selected: true, marked: true, selectedColor: '#3a7dda'}
                     
                })
                setmarked(markObject)
                setloader(false)

            } catch (error) {
                console.log(error)
            }
        })();
       
       
    }, [])

    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
            <HeaderView navigation={navigation} Title={'Manufacturing'} IconFamily={'Ionicons'}/>
            {loader?<LoadView/>:
        <View style={{width:'100%',height:'100%'}}>
           <PlantVishView title='Number of plants Assembled' data={data2.plants_assembled}/>
           <PlantVishView title='Number of plants currently under manufacturing' data={data2.plants_under_assy}/>
           <PlantVishView title='Number of plants for which material has arrived but manufacturing not started' data={data2.plants_which_material_come_but_still_not_inititated}/>
           <CalanderView marked={marked} data={data}/>
           <ModalView/>
        </View>}
        </SafeAreaView>
    )
}

export default ManufacturingScrenn

const styles = StyleSheet.create({})
