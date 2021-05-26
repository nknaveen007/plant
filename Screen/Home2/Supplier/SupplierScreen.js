import React,{useEffect,useState,useContext} from 'react'
import { StyleSheet,SafeAreaView,FlatList, View } from 'react-native'
import instance from '../../../Api/api'
import HeaderView from '../../../Components/HeaderView'
import ProgressBar from '../../../Components/Home2/ProgressBar'
import TopSelectorView from '../../../Components/Home2/TopSelectorView'
import LoadView from '../../../Components/LoadView'
import { StateContext } from '../../../context/Context'

const SupplierScreen = ({navigation}) => {
    const [proMaintainer, setproMaintainer]=useContext(StateContext)
    const [data, setdata] = useState([])
    const [loader, setloader] = useState(false)
    
    

    useEffect(() => {
        (async()=>{
            try {
                setloader(true)
                const result=await instance.post('/procurementlist')
                setdata(result.data.data)
                setloader(false)
            } catch (error) {
                console.log(error)
            }
        })();
       
       
    }, [])
    return (
        <SafeAreaView style={{height:'100%'}}>
           <HeaderView navigation={navigation} Title={'Procurement Execution'} IconFamily={'Ionicons'}/>

           <TopSelectorView heading='Current Status PO/LOI Placement' navigation={navigation}/>
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
                <ProgressBar title={item.category} percent={value} nav='Status1' navigation={navigation} id={item.id} screen='pro'/>
              )
          }}
          style={{top:10}}
           />}
          

        </SafeAreaView>
    )
}

export default SupplierScreen

const styles = StyleSheet.create({})
