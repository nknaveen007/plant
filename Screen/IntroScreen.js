import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import IntroBackground from '../Components/IntroBackground'

const IntroScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1}}>
          <IntroBackground navigation={navigation}/>
        </SafeAreaView>
    )
}

export default IntroScreen

const styles = StyleSheet.create({})
