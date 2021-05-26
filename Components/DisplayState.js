import React from 'react'
import { StyleSheet, Text, View,FlatList } from 'react-native'
import { List,Divider,Searchbar} from 'react-native-paper';

const DisplayState = ({statedata,setstateView,setmaintainerData,setdata,data,filterData,setbuttonView}) => {
    return (
        <FlatList
        data={statedata}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item})=>{
            return(
               <>
              
              <List.Item
              title={item}
              
              onPress={()=>
                  {
                    let da=[]
                    filterData.map((value,index)=>{
                      if(value.state===item){
                          da.push(value)
                      }
                   })
                   setdata(da)
                    setmaintainerData(item) 
                    setstateView(false)
                    
                     
}
                  }
              />
              <Divider />
              
              </>
            )
        }}
      />
    )
}

export default DisplayState

const styles = StyleSheet.create({})
