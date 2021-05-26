import { Lato_400Regular, Lato_400Regular_Italic, Lato_700Bold, Lato_700Bold_Italic } from '@expo-google-fonts/lato';
import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,SafeAreaView,Modal,Pressable, Image } from 'react-native'
import MapView,{Marker,PROVIDER_GOOGLE} from 'react-native-maps';
import { DataTable } from 'react-native-paper';



const MapComponentView = ({filterData,statedata}) => {
 const [show, setshow] = useState(false)
  const [select, setselect] = useState(false)
  const [stateData, setstateData] = useState([])
  const [data, setdata] = useState([])

  const stateLocationData=[
    {name:'Andhra Pradesh',location:{latitude:15.91,longitude:79.74}},
    {name:'Arunachal Pradesh',location:{latitude:28.21,longitude:94.72}},
    {name:'Assam',location:{latitude:26.20,longitude:92.93}},
    {name:'Bihar',location:{latitude:25.09,longitude:85.31}},
    {name:'Chhattisgarh',location:{latitude:21.27,longitude:81.86}},
    {name:'Goa',location:{latitude:15.29,longitude:74.12}},
    {name:'Gujarat',location:{latitude:22.25,longitude:71.19}},
    {name:'Haryana',location:{latitude:29.05,longitude:76.08}},
    {name:'Himachal Pradesh',location:{latitude:31.10,longitude:77.17}},
    {name:'Jammu & Kashmir',location:{latitude:33.77,longitude:76.57}},
    {name:'Jharkhand',location:{latitude:23.61,longitude:85.27}},
    {name:'Karnataka',location:{latitude:15.31,longitude:75.71}},
    {name:'Kerala',location:{latitude:10.85,longitude:76.27}},
    {name:'Madhya Pradesh',location:{latitude:22.97,longitude:78.65}},
    {name:'Maharashtra',location:{latitude:19.75,longitude:75.71}},
    {name:'Manipur',location:{latitude:24.66,longitude:93.90}},
    {name:'Meghalaya',location:{latitude:25.46,longitude:91.36}},
    {name:'Mizoram',location:{latitude:23.16,longitude:92.93}},
    {name:'Nagaland',location:{latitude:26.15,longitude:94.56}},
    {name:'Odisha',location:{latitude:20.95,longitude:85.09}},
    {name:'Punjab',location:{latitude:31.14,longitude:75.34}},
    {name:'Rajasthan',location:{latitude:27.02,longitude:74.21}},
    {name:'Sikkim',location:{latitude:27.53,longitude:88.51}},
    {name:'Tamil Nadu',location:{latitude:11.12,longitude:78.65}},
    {name:'Tripura',location:{latitude:23.94,longitude:91.98}},
    {name:'Uttarakhand',location:{latitude:30.06,longitude:79.01}},
    {name:'Uttar Pradesh',location:{latitude:26.84,longitude:80.94}},
    {name:'West Bengal',location:{latitude:22.98,longitude:87.85}},
   
  ]

  useEffect(() => {
    
      stateLocationData.map((value,index)=>{
           if(statedata.includes(value.name)){
               let location=value.location
               let name=value.name
               filterData.map((value,index)=>{
                   if(value.state===name){
                       filterData[index].co=location
                   }
               })
               
           }
      })
       setshow(true)
     
   
    
}, [])



    return (
        <View style={{width:'100%',height:'100%'}}>
        {show?
<View style={{width:'100%',height:'100%'}}>
<MapView 
provider={PROVIDER_GOOGLE}
style={{width:'100%',height:'100%'}}

initialRegion={{
  latitude: 20.5937,
  longitude: 80.9629,
  latitudeDelta: 30,
  longitudeDelta: 23,
}}
>

  {filterData.map((value,index)=>{

    return(
       <Marker 
       onPress={()=>{
         setstateData({
          state:value.state,
          city: value.city,
          location: value.location,
          plants_planned: value.plants_planned,
          plants_installed:value.plants_installed

         })
        setselect(true)
       }}
       key={index}
       image={require('../assets/pin.png')}
       coordinate={value.co}
       title={value.state}
      
      />
    )
  })}

  

</MapView>
<Modal
  animationType="slide"
  transparent={true}
  visible={select}
  onRequestClose={() => {
    setselect(!select)
  }}
>
 
  <View style={styles.centeredView}>
    <View style={styles.modalView}>
    <DataTable>
    <DataTable.Header >
      <DataTable.Title ><Text style={{ fontFamily:'Lato_700Bold_Italic'}}>Data</Text></DataTable.Title>
      <DataTable.Title numeric><Text style={{ fontFamily:'Lato_700Bold_Italic'}}>Value</Text></DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>State</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{stateData.state}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>City</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{stateData.city}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>Location</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{stateData.location}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>Planned</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{stateData.plants_planned}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>Installed</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{stateData.plants_installed}</Text></DataTable.Cell>
    </DataTable.Row>

    

    

    
  </DataTable>

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setselect(!select)}
      >
        <Text style={styles.textStyle}>Cancel</Text>
      </Pressable>
    </View>
  </View>
</Modal>
      
  </View>:null}
        </View>
    )
}


export default MapComponentView

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:'90%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 15,
    paddingVertical:8,
    elevation: 2,
    marginTop:20,
    width:100
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    
  },
  TitleText:{
    fontFamily:'Lato_400Regular',
    
  },
  value:{
    fontFamily:'Lato_400Regular',
  }
})
