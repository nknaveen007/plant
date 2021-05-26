import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import HeaderView from '../../Components/HeaderView'
import PlantVishView from '../../Components/Home2/PlantVishView'
import CalanderView from '../../Components/CalanderView'
import ModalView from '../../Components/ModalView'
import instance from '../../Api/api'
import LoadView from '../../Components/LoadView'

const DespatchesScreen = ({navigation}) => {
    const [data, setdata] = useState([])
    const [data2, setdata2] = useState({})
    const [marked, setmarked] = useState({})
    const [loader, setloader] = useState(false)

    useEffect(() => {
        (async()=>{
            setloader(true)
            try {
                const result=await instance.post('/despatchdatewise')
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
                setloader(false)
                alert('Network Error')
            }
        })();
       
       
    }, [])


    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
           <HeaderView navigation={navigation} Title={'Despatches'} IconFamily={'Ionicons'}/>
         {loader?<LoadView/>:
            <View style={{width:'100%',height:'100%'}}>
           <PlantVishView title='Number of plants despatched' data={data2.plants_despatched}/>
           <CalanderView marked={marked} data={data}/>
           <ModalView/>
         </View>}
    </SafeAreaView>
    )
}

export default DespatchesScreen

const styles = StyleSheet.create({})
