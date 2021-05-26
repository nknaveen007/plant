import React,{useState,useEffect} from 'react'
import { ScrollView, StyleSheet  } from 'react-native';
import { DataTable, Card, useTheme } from 'react-native-paper';
import LoadView from '../LoadView';

const TableView = ({data}) => {

    const [sortAscending, setSortAscending] = useState(true);
    const [page, setPage] = useState(0);
    const [loader, setloader] = useState(true)
  

    const {
        colors: { background },
      } = useTheme();

      const  sortedItems = data
        .slice()
        .sort((item1, item2) =>
          (sortAscending ? item1.date_wise < item2.date_wise : item2.date_wise < item1.date_wise)
            ? 1
            : -1
        );
        const itemsPerPage=4
     const  from = page * itemsPerPage;
     const  to = (page + 1) * itemsPerPage;

     useEffect(() => {
        setTimeout(() => {
            setloader(false)
        }, 500);
    
    }, [])
      

    return (
        
        <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
         {loader?<LoadView/>:
        <Card>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title
                sortDirection={sortAscending ? 'ascending' : 'descending'}
                onPress={() => setSortAscending(!sortAscending)}
                style={styles.first}
              >
                Date
              </DataTable.Title>
              <DataTable.Title style={{flex:2,left:'4%'}}numeric>Requirement</DataTable.Title>
              <DataTable.Title style={{flex:2,right:'0.5%'}} numeric>Per Plan</DataTable.Title>
              <DataTable.Title style={{flex:2}} numeric>Anticipated</DataTable.Title>
            </DataTable.Header>
  
            {sortedItems.slice(from, to).map((item) => (
              <DataTable.Row key={item.id}>
                <DataTable.Cell style={styles.first}>{item.date_wise}</DataTable.Cell>
                <DataTable.Cell style={{flex:2,left:'1%'}} numeric>{item.contract_requirement}</DataTable.Cell>
                <DataTable.Cell style={{flex:2,right:'2%'}} numeric>{item.as_per_plan}</DataTable.Cell>
                <DataTable.Cell style={{flex:2,right:'2%'}} numeric>{item.anticipated}</DataTable.Cell>
                
              </DataTable.Row>
            ))}
  
            <DataTable.Pagination
              page={page}
              numberOfPages={Math.round(sortedItems.length / itemsPerPage)}
              onPageChange={(page) => setPage(page)}
              label={`${from + 1}-${to} of ${sortedItems.length}`}
            />
          </DataTable>
        </Card>}
      </ScrollView>
    )
}

export default TableView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:'4%'
      },
    
      content: {
        padding: 8,
      },
    
      first: {
        flex: 2,
      },
})
