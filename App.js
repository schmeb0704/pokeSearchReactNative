import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  Image,
  ScrollView
} 
from 'react-native';
import React from "react"

export default function App() {
  const [pokemon, setPokemon] = React.useState({
    name: "",
    type: "",
    dexNum: "",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  })
  const [searchMe, setSearchMe] = React.useState("bulbasaur")
  const [toSearch, setSearch] = React.useState("")

  React.useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchMe}`)
      .then(response => response.json())
      .then(dataFromResponse => fetch(dataFromResponse.forms[0].url)
        .then(response => response.json())
        .then(formsResponse => setPokemon(prevPokemon => ({
          ...prevPokemon,
          name: formsResponse.name,
          type: formsResponse.types[0].type.name,
          dexNum: formsResponse.id,
          sprite: formsResponse.sprites.front_default
        })))
      )
  }, [searchMe])

  function changeSearchInput(enteredText){
    let firstLetter = enteredText.slice(0,1)
    let theRest = enteredText.slice(1)
    let lowerLetter = firstLetter.toLowerCase()
    let newWord = lowerLetter + theRest

     setSearch(newWord)
  }

  function newSearch(){
    setSearchMe(toSearch)
  }

  return (
    <View style={styles.mainPage}>
      <View style={styles.inputSearch}>
        <View style={styles.searchBar}>
          <TextInput placeholder='Search Pokemon'
            style={{
              padding: 5
            }}
            onChangeText={changeSearchInput}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Search' color={"red"} onPress={newSearch}/>
        </View>
      </View>
      <StatusBar style="auto" />
      <ScrollView >
        <View style={styles.searchContent}>
          <View style={styles.spriteHolder}>
            <Image source={{uri: `${pokemon.sprite}` }} style={{width: "100%", height: "100%"}} />
          </View>
          <View style={styles.pokeDescription}>
            <Text>#{pokemon.dexNum <= 9 ? "00" : pokemon.dexNum >=10 && pokemon.dexNum < 100 ? "0": ""}{pokemon.dexNum}</Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Text style={styles.type}>{pokemon.type}</Text>
          </View>
        </View>
      </ScrollView>
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
  },
  searchContent:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  spriteHolder:{
    height: 200,
    width: 200,
    marginTop: 15,
    backgroundColor: "#616161",
    borderRadius: 8
  },
  name:{
    textTransform: "capitalize",
    fontWeight: "600"
  }, 
  type:{
    textTransform: "capitalize"
  },
  pokeDescription:{
    alignItems: 'flex-start',
    justifyContent: "flex-start",

    width: 200,
    height: 70,
    padding: 5,
  }
});
