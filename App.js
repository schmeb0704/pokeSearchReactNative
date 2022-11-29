import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import React from "react"

export default function App() {
  const [pokemon, setPokemon] = React.useState({
    name: "",
    type: "",
    dexNum: "",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  })
  const [searchMe, setSearchMe] = React.useState("pikachu")
  const [toSearch, setSearch] = React.useState({
    searchName: ""
  })

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
      <View>
        <Image source={{uri: `${pokemon.sprite}` }} style={{width: 100, height: 100}} />
      </View>
      <View>
        <Text>{pokemon.name}</Text>
        <Text>{pokemon.type}</Text>
        <Text>{pokemon.dexNum}</Text>
      </View>
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
