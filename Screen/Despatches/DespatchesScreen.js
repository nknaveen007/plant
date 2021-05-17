import React from 'react'
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native'
import HeaderView from '../../Components/HeaderView'
import PlantVishView from '../../Components/Home2/PlantVishView'
import CalanderView from '../../Components/CalanderView'

const DespatchesScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'#fff',height:'100%'}}>
        <HeaderView navigation={navigation} Title={'Despatches'} IconFamily={'Ionicons'}/>
           <PlantVishView title='Number of plants despatched'/>
       <CalanderView/>
      
    </SafeAreaView>
    )
}

export default DespatchesScreen

const styles = StyleSheet.create({})
