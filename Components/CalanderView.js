import React,{useContext, useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {Calendar,calendarTheme} from 'react-native-calendars';
import moment from 'moment'
import { CalanderContext } from '../context/Context';

const CalanderView = ({marked,data}) => {
const [datepic, setdatepic,select, setselect,picdata, setpicdata]=useContext(CalanderContext)
    

    const getSelectedDayEvents =  async(date) => {
      data.map((value,index)=>{
                 
        if(value.date_wise===date){
        setdatepic(date)
        setselect(true)
        setpicdata({
          anticipated:value.anticipated,
          as_per_plan:value.as_per_plan
        })
        }
        
       })
        
          
    }


    return (
        <View style={{marginTop:'4%'}}>
           <Calendar
  style={{ height: 360, width: "90%",alignSelf:'center'}}
  
  theme={{
    
    backgroundColor: "#fafafa",
    calendarBackground: "#fff",
    todayTextColor: "#3a7dda",
    dayTextColor: "#222222",
    textDisabledColor: "#d9e1e8",
    monthTextColor: "#3a7dda",
    arrowColor: "#3a7dda",
    textDayFontWeight: "400",
    textMonthFontWeight: "bold",
    textDayHeaderFontWeight: "500",
    textDayFontSize: 16,
    textMonthFontSize: 18,
    selectedDayBackgroundColor: "#3a7dda",
    selectedDayTextColor: "white",
    textDayHeaderFontSize: 14

  }}
  
  
  current={new Date()}
  firstDay={1}
  enableSwipeMonths={true}
  hideExtraDays={true}
  minDate={new Date()}
  maxDate={"2030-05-30"}
  monthFormat={"MMMM yyyy "}
  markedDates={marked}
  scrollEnabled={true}
  horizontal={true}
  showScrollIndicator={true}
  disableMonthChange={true}
  onDayPress={day => {
    getSelectedDayEvents(day.dateString)
  }
  }
  
/>
        </View>
    )
}

export default CalanderView

const styles = StyleSheet.create({})
