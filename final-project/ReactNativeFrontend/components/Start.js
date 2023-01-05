import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Typography, Containers, Spacing } from '../styles'
import { PrimaryIconBtn } from "../styles/buttons";
import { palette } from "../styles/colors";
import { size, lineheight } from "../styles/typography";
import { spacing } from "../styles/spacing";

const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState(null); // Response 1: Results matching the input title
  const { search_result } = useParams(); // need this?


  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };

  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}`, options)
    .then(response => response.json())
    .then(response => setSearchResults(response.results))
    .catch(err => console.error(err));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Stream.guide</Text>
        <Link to='/login'><Text style={styles.text}>Login</Text></Link>
      </View>
    
      
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search movies"
          placeholderTextColor="rgba(252,238,247,0.5)" 
          returnKeyType="search"
          keyboardType="default"
          type="text"
          onChangeText={(text) => {
            setTitle(text);
            setSearchResults(null); // Remove previous results
        }}/>
        <PrimaryIconBtn
          source={require('../assets/search.svg')}
          onPress={(onFormSubmit)}
          type="submit"/>
      </View>
      
    {searchResults && (
      <View>
        {searchResults.map((item) => {
          return (
            <View key={item.name}> <Text style={styles.text}>{item.name}</Text></View>
          )
        })}
      </View>
    )}

      {/* <View>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}>
              <View>
                <Image
                  style={{width: '50%', height: '100%'}}
                  source={{ uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}` }}/>
                <View>
                  <Text style={styles.text}>{movie.title}</Text>
                  <Text>Released {movie.release_date}</Text>
                </View>
              </View>
          </Link>
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
    },

    searchBar: {
      backgroundColor: palette.lavenderBlush04,
      borderColor: palette.darkPurple,
      borderWidth: 1,
      borderRadius: 35,
      flexDirection: "row",
      width: "90%",
      paddingLeft: size.M,
    },

    input: {
      fontSize: size.S,
      lineHeight: lineheight.S,
      paddingTop: spacing.S,
      paddingBottom: spacing.S,
      color: palette.lavenderBlush,
      width: "90%",
    },

    text: {
      color: palette.lavenderBlush
    },

    header: {
      flexDirection: "row"
    },

    textHeader: {
      fontSize: size.M,
      lineHeight: lineheight.M,
      color: palette.lavenderBlush
    }
});
  
export default Start;


