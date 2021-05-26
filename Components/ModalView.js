import { Lato_400Regular } from '@expo-google-fonts/lato'
import React,{useState,useContext} from 'react'
import { StyleSheet, Text, View ,Modal,Pressable} from 'react-native'
import { CalanderContext } from '../context/Context'
import { DataTable, } from 'react-native-paper';

const ModalView = () => {
 const [datepic, setdatepic,select, setselect,picdata, setpicdata]= useContext(CalanderContext)
    
    return (
        <View style={styles.centeredView}>
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
      <DataTable.Cell><Text style={styles.TitleText}>Date</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{datepic}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>Anticipated</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{picdata.anticipated}</Text></DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell><Text style={styles.TitleText}>As per plan</Text></DataTable.Cell>
      <DataTable.Cell numeric><Text style={styles.value}>{picdata.as_per_plan}</Text></DataTable.Cell>
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


       
      </View>
    )
}

export default ModalView

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
    padding: 35,
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
    fontFamily:'Lato_400Regular'
  }
})
