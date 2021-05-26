import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView, FlatList } from 'react-native'
import HeaderView from '../../../Components/HeaderView'
import LocationData from '../../../Components/LocationData'
import LocationTopView from '../../../Components/LocationTopView'
import { Button } from 'react-native-paper';
import instance from '../../../Api/api'
import DisplayState from '../../../Components/DisplayState'
import LoadView from '../../../Components/LoadView'



const IcLocationScreen = ({navigation}) => {

    const [data, setdata] = useState([])
    const [filterData, setfilterData] = useState([])
    const [statedata, setstatedata] = useState([])
    const [stateView, setstateView] = useState(false)
    const [maintainerData, setmaintainerData] = useState('')
    const [buttonView, setbuttonView] = useState(false)
    const [loader, setloader] = useState(false)

    

    useEffect(() => {

        (async()=>{
            setloader(true)
            try {
                console.log('hii')
                const result=await instance.post('/iandclocationwise')
                const data=result.data.data
                let arr=[]
                
                    data.map((value,index)=>{
                        arr.push(value.state)
                     })
                const state=[...new Set(arr)]
                setdata(data)
                setfilterData(data)
                setstatedata(state)
                setloader(false)
                 

            } catch (error) {
                console.log(error)
            }
        })();
       
       
    }, [])


    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
     <HeaderView navigation={navigation} Title={'I&C Location wise details'} IconFamily={'Ionicons'}/>
     {stateView?<DisplayState statedata={statedata} setstateView={setstateView} setmaintainerData={setmaintainerData} setdata={setdata} data={data} filterData={filterData} setbuttonView={setbuttonView}/>:
     <View style={{flex: 1,}}>
     <LocationTopView navigation={navigation} setstateView={setstateView} buttonView={buttonView} maintainerData={maintainerData} filterData={filterData} setdata={setdata} setbuttonView={setbuttonView} setmaintainerData={setmaintainerData}/>
        <View style={{height:'70%'}}>
            {loader?<LoadView/>:
        <FlatList 
            data={data}
            keyExtractor={(item,index)=>index.toString()}
            
            renderItem={({item})=>{
                return(
                    <LocationData state={item.state} city={item.city} Planned={item.plants_planned} location={item.location} installed={item.plants_installed}/>  
                )
            }}
        />}
        </View>
        
        <Button  mode='outlined' labelStyle={{textTransform:'none',fontSize:16,color:'#3a7dda',fontFamily:'Lato_700Bold'}} onPress={() => navigation.navigate('Icmap',{filterData:filterData,statedata:statedata})} color='#FFFFFF'  style={{borderColor:'#3a7dda',borderWidth:1,borderRadius:10,position:'absolute',bottom:'3%',width:'90%',alignSelf:'center'}}>
               Show Map
        </Button>
        </View>}
    </SafeAreaView>
    )
}

export default IcLocationScreen

const styles = StyleSheet.create({})
