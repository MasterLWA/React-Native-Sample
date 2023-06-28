import React,{useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  const [name,setName] = useState('Lakindu');
  const [person,setPerson] = useState({name:'Lakindu',age:24});
  
  const clickHandler = () => {
    setName('Lakindu Widuranga');
    setPerson({name:'Lakindu Widuranga',age:25});
  }


  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>my name is {person.name}. my age is {person.age} </Text>
      <Text style={styles.buttonContainer}>
        <Button title='Update State' onPress={clickHandler}></Button>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonContainer:{
    marginTop:20
  }
});

