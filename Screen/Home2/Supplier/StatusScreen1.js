import React,{useEffect,useState,useContext} from 'react'
import { StyleSheet, Text, View,SafeAreaView,ScrollView,FlatList } from 'react-native'
import LinearProgress from '../../../Components/Home2/LinearProgress'
import HeaderView from '../../../Components/HeaderView'
import instance from '../../../Api/api'
import { StateContext } from '../../../context/Context'
import LoadView from '../../../Components/LoadView'


const StatusScreen1 = ({navigation,route}) => {

    const [proMaintainer, setproMaintainer]=useContext(StateContext)
   const {id,screen,title}=route.params
   const [data, setdata] = useState([])
   const [loader, setloader] = useState(false)

    useEffect(() => {
     setloader(true)
        switch (screen) {
            case 'pro':
                (async()=>{
                    try {
                        const result=await instance.post(`/procurementitems`,{
                            category_id:id
                        })
                        setdata(result.data.data)
                        setloader(false)
                       
                    } catch (error) {
                        console.log(error)
                    }
                })();
                break;

                case 'mat':
                    (async()=>{
                        try {
                            const result1=await instance.post(`/materialitems`,{
                                material_id:id
                            })
                            setdata(result1.data.data)
                            setloader(false)
                           
                        } catch (error) {
                            console.log(error)
                        }
                    })();
                break;
            
        
            default:
                break;
        }
       
       
        
    }, [])
    return (
        <SafeAreaView style={{height:'100%'}}>
            <HeaderView navigation={navigation} Title={title} IconFamily={'Ionicons'}/>
            
           {loader?<LoadView/>:
            
            <FlatList 
          data={data}
          keyExtractor={(item,index)=>index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item})=>{
              let title
             if(item.item_code){
                  title=item.item_code
             }else{
                 title=item.description
             }
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
                <LinearProgress title={title} percent={value}/>
              )
          }}
          style={{top:10}}
           />}
            
        </SafeAreaView>
    )
}

export default StatusScreen1

const styles = StyleSheet.create({})
