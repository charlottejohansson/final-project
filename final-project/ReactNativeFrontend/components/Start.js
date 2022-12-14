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
import { MovieCard } from "../styles/movieCard";

const Start = ({movies}) => {

  const [title, setTitle] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
  
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
              setSearchResults(null);
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
              <View style = {styles.searchPage}>    
                <Link
                  key={item.id}
                  to={`/MovieDetailsSearch/${item.id}`}>
                  <Text style={styles.text}>{item.name}</Text>
                </Link>
              </View>
            );
          })}
        </View>
      )}


      {/* New releases */}
      <ScrollView style={{
        paddingVertical: spacing.S, 
        width: "100%"}}>
        <Text style={styles.h2}>New Releases</Text>
        <View style={styles.movieCardContainer}>
          {movies.map((movie) => (
            <Link
                key={movie.id}
                to={`/MovieDetails/${movie.id}`}>
              <MovieCard
                title={movie.title}
                source={{ uri:`https://image.tmdb.org/t/p/w342${movie.poster_path}`}}
              />
            </Link>
          ))}
        </View>
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
      paddingHorizontal: 20,
      alignItems: "center"
    },

    movieCardContainer: {
      justifyContent: "center",
      paddingVertical: spacing.XS, 
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    
    searchPage: {
        color: "rgba(0, 0, 0, 0.3)", 
        width: "100%", 
        height: "100%",
        // position: "absolute",
        top: 0, 
        left: 0,
    },

    searchBar: {
      backgroundColor: palette.lavenderBlush04,
      borderColor: palette.darkPurple,
      borderWidth: 1,
      borderRadius: 35,
      flexDirection: "row",
      paddingLeft: size.M,
      maxWidth: 600
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
      marginLeft: 10
    },

    text: {
      color: palette.lavenderBlush
    }
});
  
export default Start;