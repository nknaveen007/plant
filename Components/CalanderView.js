import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {Calendar,calendarTheme} from 'react-native-calendars';
import moment from 'moment'

const CalanderView = () => {

    const [markedDates, setmarkedDates] = useState({'2021-04-7': {selected: true, marked: true, selectedColor: 'blue'}})

    const [selectedDate, setselectedDate] = useState('')
    const [Day, setDay] = useState('')

    const getSelectedDayEvents =  async(date) => {
         
        
          let markedDates = {};
          markedDates[date] = { selected: true, color: '#00B0BF', textColor: '#FFFFFF' };
          
          let serviceDate = moment(date);
          serviceDate = serviceDate.format("YYYY-MM-DD");
          let date1=new Date(serviceDate)
          let day=date1.getDay()
          var weekday = new Array(7);
  
  weekday[0] = "sunday";
  weekday[1] = 'monday';
  weekday[2] = "tuesday";
  weekday[3] = "wednesday";
  weekday[4] = "thursday";
  weekday[5] = "friday";
  weekday[6] = "saturday";
  
  
  var n = weekday[day];
 
  
          setDay(n)
          setselectedDate(serviceDate)
          setmarkedDates(markedDates)
    }


    return (
        <View style={{marginTop:'5%'}}>
           <Calendar
  style={{ height: 300, width: "90%",alignSelf:'center'}}
  
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
  markedDates={markedDates}
  scrollEnabled={true}
  horizontal={true}
  showScrollIndicator={true}
  disableMonthChange={true}
  onDayPress={day => getSelectedDayEvents(day.dateString)}
/>
        </View>
    )
}

export default CalanderView

const styles = StyleSheet.create({})
