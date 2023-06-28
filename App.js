import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Touchable, TouchableOpacity } from 'react-native';


export default function App() {

  const [people,setPeople] = useState([
    {name:'Stark',id:'8'},
    {name:'Thor',id:'9'},
    {name:'Hulk',id:'10'},
    {name:'Captain',id:'11'},
    {name:'Black Widow',id:'12'},
    {name:'Hawkeye',id:'13'},
    {name:'Spiderman',id:'14'},
    {name:'Black Panther',id:'15'},
    {name:'Doctor Strange',id:'16'},
    {name:'Captain Marvel',id:'17'},
  ]);

  const [name,setName] = useState('')

  const pressHandeler = (name) => {
      setName(name);

      setPeople((prevPeople)=>{
        return prevPeople.filter(person => person.name != name)
      })
  }
  return (
    <View style={styles.container}>

      {/* method 1 is FlatList. its used for large amount of data */}
      <FlatList
        numColumns={2}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item})=>(
          <TouchableOpacity onPress={() => pressHandeler(item.name, item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      
      <Text style={styles.text}>{name}</Text>
      {/* ScrollView is used for small amount of data */}
      {/* <ScrollView>
        {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))}
      </ScrollView> */}

    </View>
  );
}

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  ButtonContainer:{
    marginTop:20
  },
  input:{
    borderWidth:1,
    borderColor:'#777',
    padding:8,
    margin:10,
    width:200,
    borderRadius:10
  },
  item:{
    marginTop:24,
    padding:30,
    backgroundColor:'black',
    fontSize:24,
    marginHorizontal:10,
    color:'white',
  },
  text:{
    marginTop:20,
    fontSize:40,
    color:'black',
    textAlign:'center',
    marginBottom:50
  }
});

