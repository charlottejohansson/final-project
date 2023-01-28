import React, {useState } from "react";
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from "react-native";
import { Typography, Containers, Spacing, Colors } from '../styles'
import { MovieCard } from "../styles/movieCard";
import { IconBtn } from "../styles/iconButton";
import { FontAwesome5 } from '@expo/vector-icons'; 


const Start = ({movies}) => {

  const [title, setTitle] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
  
  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '4609bbe44amshe3f86b78da14a2cp13f543jsnbad29ed23699',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };

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
    <View style={{...Containers.outerContainer}}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.heading}>
          <Link to="/">
            <FontAwesome5 
                style={{opacity: 0}} 
                name="chevron-left" 
                size={24} 
                color={Colors.palette.lavenderBlush} />
          </Link>
          <Link to="/">
            <Text style={styles.h2}>Stream.guide</Text>
          </Link>
          <Link to='/login'>
            <FontAwesome5 
              style={styles.icon} 
              name="user-circle" 
              size={24} 
              color={Colors.palette.lavenderBlush} />
          </Link>
        </View>
          {/* Search field */}
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
            <IconBtn
              name={"search"}
              size={24}
              onPress={(onFormSubmit)}
              type="submit"/>
          </View>
      </View>
      
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
          paddingVertical: Spacing.spacing.S, 
          width: "100%"}}>
          <Text style={styles.h2}>New Releases</Text>
          <View style={styles.movieCardWrapper}>
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
  heading: {
    paddingBottom: Spacing.spacing.S,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: Spacing.spacing.XXL,
    paddingBottom: Spacing.spacing.M,
  },

  icon: {
    paddingVertical: 3,
  },

  headerContainer: {
    paddingBottom: Spacing.spacing.S,
    width: "100%",
    alignContent: "center",
    paddingHorizontal: Spacing.spacing.S
  },

  movieCardWrapper: {
    justifyContent: "center",
    paddingVertical: Spacing.spacing.XS, 
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap"
  },
    
  searchPage: {
    paddingVertical: Spacing.spacing.XS,
    borderBottomColor: Colors.palette.darkPurple,
    borderBottomWidth: 1
  },

  searchBar: {
    backgroundColor: Colors.palette.lavenderBlush04,
    borderColor: Colors.palette.darkPurple,
    borderWidth: 1,
    borderRadius: 35,
    flexDirection: "row",
    paddingLeft: Spacing.spacing.M,
    width: "100%"
  },

  input: {
    fontSize: Typography.size.S,
    lineHeight: Typography.lineheight.S,
    paddingTop: Spacing.spacing.S,
    paddingBottom: Spacing.spacing.S,
    color: Colors.palette.lavenderBlush,
    flex: 1
  },

  h2: {
    fontSize: Typography.size.M,
    lineHeight: Typography.lineheight.M,
    color: Colors.palette.lavenderBlush,
    marginLeft: Spacing.spacing.L
  },

  text: {
    fontSize: Typography.size.S,
    color: Colors.palette.lavenderBlush,
    paddingLeft: Spacing.spacing.XS,
    flex: 1
  }
});
  
export default Start;