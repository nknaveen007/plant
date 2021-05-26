import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const Dummy = ({navigation}) => {
    return (
        <View style={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{}}>Hello Main</Text>
            <Text style={{}}>Hello Main</Text>
            <Button title='click me' onPress={()=>navigation.navigate('Home')}/>
        </View>
    )
}

export default Dummy

const styles = StyleSheet.create({})
