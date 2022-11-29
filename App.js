import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainPage}>
      <View style={styles.inputSearch}>
        <View style={styles.searchBar}>
          <TextInput placeholder='Search Pokemon'
            style={{
              padding: 5
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Search' color={"red"}/>
        </View>
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

    paddingHorizontal: 10,
    paddingVertical: 10,
    
  },
  searchBar:{
    backgroundColor: "white",
    height: "90%",
    borderRadius: 8,
    textAlign: 'center',
    flex: 2,
  },
  buttonContainer:{
    flex: 1
  }
});
