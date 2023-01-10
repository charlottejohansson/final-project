import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from "react-native";
import { Typography, Containers, Spacing } from '../styles'
import { PrimaryIconBtn } from "../styles/buttons";
import { Heading } from "../styles/heading";
import { palette } from "../styles/colors";
import { size, lineheight } from "../styles/typography";
import { spacing } from "../styles/spacing";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
  // const [id, setId] = useState(null); // Input title of the show/movie
  // const [source, setSource] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState([]); // Response 1: Results matching the input title
  const { search_result } = useParams(); // need this?


  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9a7382db50msh6462aa86d1ccba6p1903c0jsn219a84a3cae4',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };

  var movieSearch;

  // Call the API
  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}&search_type=2`, options)
    .then(function (response){
          return response.json();
  }).then(function (data) {
      setSearchResults(data.results)
      console.log(data)
  }).catch(function (error) {
      console.warn(error);
  });

   }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Heading/>
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
            name={"search"}
            size={24}
            onPress={(onFormSubmit)}
            type="submit"/>
        </View>
      </View>
      {/* Searchbar */}
      
      
      {/* Search results */}
      {searchResults && (
        <View>
          {searchResults.map((item) => {
            return (
              <View>    
                <Link
                  key={item.id}
                  to={`/MovieDetailsSearch/${item.id}`}>
                  <Text style={styles.text}>{item.name}</Text>
                </Link>
              </View>
            )
          })}
        </View>
      )}
      {/* New releases */}
      <ScrollView style={{paddingVertical: spacing.S, width: "100%" }}>
        <Text style={styles.h2}>New Releases</Text>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}>
            <View>
              <Image
                style={styles.movieImage}
                source={{ uri:`https://image.tmdb.org/t/p/w342${movie.poster_path}`}}/>
              <View style={styles.overlay}/>
              <Text style={styles.movieText}>{movie.title}</Text>
            </View>
          </Link>
        ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
    },

    headerContainer: {
      paddingBottom: 20,
      width: "100%",
    },
    
    searchBar: {
      backgroundColor: palette.lavenderBlush04,
      borderColor: palette.darkPurple,
      borderWidth: 1,
      borderRadius: 35,
      flexDirection: "row",
      paddingLeft: size.M,
    },

    input: {
      fontSize: size.S,
      lineHeight: lineheight.S,
      paddingTop: spacing.S,
      paddingBottom: spacing.S,
      color: palette.lavenderBlush,
      flex: 1,
    },

    h2: {
      fontSize: size.M,
      lineHeight: lineheight.M,
      color: palette.lavenderBlush,
    },

    text: {
      color: palette.lavenderBlush
    },

    movieImage: {
      height: 150,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: palette.darkPurple,
      marginBottom: 15
    },

    movieText: {
      color: palette.lavenderBlush,
      fontSize: size.S,
      position: "absolute",
      top: 15,
      left: 15,
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.2)", 
      width: "100%", 
      height: 150,
      position: "absolute",
      top: 0, 
      left: 0
    }
});
  
export default Start;