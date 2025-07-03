import { Button } from '@react-navigation/elements';
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';
import { useState } from 'react';
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  const handlepress = () => {
    Alert.alert('누름')
  }
  const [value, setValue] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View>
        <Text style={styles.title}>안녕</Text>
      </View>
      <View>
        <Text style={styles.title}>하이하이</Text>
      </View>
      {/* <NewAppScreen templateFileName="App.tsx" /> */}
      <TouchableOpacity style={styles.buttonText} onPress={()=>{setValue(value+1);}}>
        <Text style={styles.button}>변경 {value}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText} onPress={handlepress}>
        <Text style={styles.button}>누름</Text>
      </TouchableOpacity>
      <Button onPress={()=>{ Alert.alert('누름'); navigation.navigate('Details');}}>
        디테일로~
      </Button>
    </View>
  )
}

function DetailsScreen() {
  const navigation = useNavigation();
  const [result, setResult] = useState(null);
  const fetchPost = async()=>{
    const number = Math.floor(Math.random()*10+1);
    const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/${number}`);
    console.log(result);
    setResult(result.data);
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      {
        result && <Text>id = {result.id} body={result.body} title={result.title}</Text>
      }
      <Text>DetailsScreen</Text>
      <TouchableOpacity style={styles.buttonText} onPress={fetchPost}>
        <Text style={styles.button}>데이터 가져오기</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonText} onPress={()=>{navigation.goBack();}}>
        <Text style={styles.button}>누름</Text>
      </TouchableOpacity>
    </View>
  )
}

const RootStack = createNativeStackNavigator(
  {
    initialRouteName: 'Home',
    screens:{
      Home:HomeScreen,
      Details:DetailsScreen
    }
  }
);

const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="home" component={HomeScreen}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 30
  },
  buttonText: {
    marginTop: 12,
    backgroundColor: '#33f',
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  button: {
    color: '#fff',
  }
});

export default App;
