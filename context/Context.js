import React,{createContext,useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'


export const StateContext=createContext()
export const CalanderContext=createContext()
export const AuthContext =createContext()



export const Login=(props)=>{
    const [token, settoken] = useState(false)


    return(
        <LoginContext.Provider value={[token,settoken]}>
            {props.children}
        </LoginContext.Provider>
    )
}


export const Calander=(props)=>{
    const [datepic, setdatepic] = useState(0)
    const [select, setselect] = useState(false)
    const [picdata, setpicdata] = useState({})


    return(
        <CalanderContext.Provider value={[datepic, setdatepic,select, setselect,picdata, setpicdata]}>
            {props.children}
        </CalanderContext.Provider>
    )
}




export const Context = (props) => {

   const [proMaintainer, setproMaintainer] = useState('overall')
   

    
    return (
       <StateContext.Provider value={[proMaintainer, setproMaintainer]}>
          {props.children}
       </StateContext.Provider>
    )
}




const styles = StyleSheet.create({})


 
