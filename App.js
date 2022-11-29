import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainPage}>
      <View style={styles.inputSearch}>
        <TextInput placeholder='Search Pokemon' style={styles.searchBar}/>
        <Button title='Search' color={"red"}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainPage:{
    paddingTop: 30
  },
  inputSearch:{
    flexDirection: "row",
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: 'center',
    
  },
  searchBar:{
    backgroundColor: "white",
    height: "90%",
    borderRadius: 8,
    textAlign: 'center',
    flex: 2,
  }
});
