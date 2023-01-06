import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, TextInput, Pressable, Image } from "react-native";
import { Typography, Containers, Spacing } from '../styles'
import { PrimaryIconBtn } from "../styles/buttons";
import { palette } from "../styles/colors";
import { size, lineheight } from "../styles/typography";
import { spacing } from "../styles/spacing";
import { FontAwesome5 } from '@expo/vector-icons'; 

const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
  const [id, setId] = useState(null); // Input title of the show/movie
  // const [source, setSource] = useState(null); // Input title of the show/movie
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

  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}&search_type=2`, options)
    .then(response => response.json())
    .then(response => setSearchResults(response.results))
    .catch(err => console.error(err));

  //   fetch(`https://watchmode.p.rapidapi.com/v1/title/${id}/sources`, options)
  //   .then(response => response.json())
  //   .then(response => setSearchResults(response.results))
  //   .catch(err => console.error(err));
   }

  return (
    <View style={styles.container}>
      {/* Header with login */}
      <View style={styles.header}>
        <Link to="/">
          <Text style={styles.textHeader}>Stream.guide</Text>
        </Link>
        <Link to='/login'>
          <FontAwesome5 
            style={styles.icon} 
            name="user-circle" 
            size={24} 
            color={palette.lavenderBlush} />
        </Link>
      </View>
    
      {/* Searchbar */}
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
      
      {/* Search results */}
      {searchResults && (
        <View>
          {searchResults.map((item) => {
            return (
              <View>    
                <Link
                  key={item.id}
                  to={`/MovieDetailsSearch/${item.id}`}>
                  <Text key={item.name} style={styles.text}>{item.name}</Text>
                </Link>
              </View>
            )
          })}
        </View>
      )}
      {/* New releases */}
      <View style={{paddingVertical: spacing.L, width: "100%", gap:"15pt"}}>
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
              <View>
                <Text style={styles.movieText}>{movie.title}</Text>
                {/* <Text>Released {movie.release_date}</Text> */}
              </View>
            </View>
          </Link>
        ))}
        </View>
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
      paddingLeft: size.M,
      width: "100%",
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

    header: {
      flexDirection: "row",
      justifyContent: "center",
      paddingTop: spacing.XXL,
      paddingBottom: spacing.M,
      width: "100%",
    },

    textHeader: {
      fontSize: size.M,
      lineHeight: lineheight.M,
      color: palette.lavenderBlush
    },

    icon: {
      position: "absolute",
      right: -93,
      paddingVertical: 3,
    },

    movieImage: {
      width: 'stretch', 
      height: '150pt',
      borderRadius: "10pt",
      borderWidth: "1pt",
      borderColor: palette.darkPurple,
    },

    movieText: {
      color: palette.lavenderBlush,
      fontSize: size.S,
      position: "absolute",
      top: "-135pt",
      left: "15pt",
    },

    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.2)", 
      width: "100%", 
      height: "150pt",
      position: "absolute",
      top: 0, 
      left: 0
    }
});
  
export default Start;