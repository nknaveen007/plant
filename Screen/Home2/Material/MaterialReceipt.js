import React,{useEffect,useContext,useState} from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList } from 'react-native'
import instance from '../../../Api/api'
import HeaderView from '../../../Components/HeaderView'
import ProgressBar from '../../../Components/Home2/ProgressBar'
import TopSelectorView from '../../../Components/Home2/TopSelectorView'
import LoadView from '../../../Components/LoadView'
import { StateContext } from '../../../context/Context'

const MaterialReceipt = ({navigation}) => {
    const [proMaintainer, setproMaintainer]=useContext(StateContext)
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(false)


    useEffect(() => {
        
        (async()=>{
            setloader(true)
            try {
                const result=await instance.post('/materiallist')
                 setdata(result.data.data)
                 setloader(false)
            } catch (error) {
                console.log(error)
                setloader(false)
                alert('Network Error')
            }
        })();
       
       
    }, [])

    return (
        <SafeAreaView style={{height:'100%'}}>
           <HeaderView navigation={navigation} Title={'Material Receipt Status'} IconFamily={'Ionicons'}/>
           <TopSelectorView heading='Material Receipt Status (By Count)' navigation={navigation}/>
           {loader?<LoadView/>:
             <FlatList 
          data={data}
          keyExtractor={(item,index)=>index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>{
              let value
              
              switch (proMaintainer) {
                  case 'overall':
                      value=parseInt(item.overall)
                      break;
                  case 'lot_1':
                      value=parseInt(item.lot_1)
                      break;
                  case 'lot_2':
                      value=parseInt(item.lot_2)
                      break;
                  case 'lot_3':
                      value=parseInt(item.lot_3)
                      break;
              
                  default:
                      break;
              }
              return(
                <ProgressBar title={item.category} percent={value} nav='Status1' navigation={navigation} id={item.id} screen='mat'/>
              )
          }}
          style={{top:10}}
           />}

        </SafeAreaView>
    )
}

export default MaterialReceipt

const styles = StyleSheet.create({})
