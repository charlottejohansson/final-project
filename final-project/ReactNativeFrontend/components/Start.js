import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from "react-native";
import { Typography, Containers, Spacing, Colors } from '../styles'
import { PrimaryIconBtn } from "../styles/buttons";
import { Heading } from "../styles/heading";
import { palette } from "../styles/colors";
import { size, lineheight } from "../styles/typography";
import { spacing } from "../styles/spacing";
import { MovieCard } from "../styles/movieCard";
import { FontAwesome5 } from '@expo/vector-icons'; 


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
        <View style={styles.heading}>
          <Link to="/">
            <FontAwesome5 
                style={{opacity: 0}} 
                name="chevron-left" 
                size={24} 
                color={palette.lavenderBlush} />
          </Link>
          <Link to="/">
            <Text style={styles.h2}>Stream.guide</Text>
          </Link>
          <Link to='/login'>
            <FontAwesome5 
              style={styles.icon} 
              name="user-circle" 
              size={24} 
              color={palette.lavenderBlush} />
          </Link>
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
    <ScrollView>
      {searchResults && (
        <View>
          {searchResults.map((item) => {
            return (
              <View 
                key={item.id} 
                style = {styles.searchPage}>    
                <Link
                  to={`/MovieDetailsSearch/${item.id}`}>
                 <View style={{flexDirection: "row", alignItems: "center", paddingHorizontal: 20, flexGrow: 1}}>   
                  <Image 
                    style={{width: 50, height: 70, borderRadius: 7}}
                    source= {{uri: `${item.image_url}` }} />
                  <Text style={styles.text}>{item.name}</Text>
                  </View>
                </Link>
              </View>
            );
          })}
        </View>
      )}


      {/* New releases */}
      <View style={{
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
      </View>
    </ScrollView>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
    },
    
    heading: {
      paddingBottom: 20,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingTop: spacing.XXL,
      paddingBottom: spacing.M,
    },

    icon: {
      paddingVertical: 3,
    },

    headerContainer: {
      paddingBottom: 20,
      width: "100%",
      alignContent: "center",
      paddingHorizontal: 20
    },

    movieCardContainer: {
      justifyContent: "center",
      paddingVertical: spacing.XS, 
      width: "100%",
      flexDirection: "row",
      flexWrap: "wrap",
    },
    
    searchPage: {
      paddingVertical: 10,
      borderBottomColor: palette.darkPurple,
      borderBottomWidth: 1
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
      marginLeft: 30,
    },

    text: {
      fontSize: size.S,
      color: palette.lavenderBlush,
      paddingLeft: 10,
      flex: 1
    }
});
  
export default Start;