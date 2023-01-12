import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-native';
import { Typography, Containers, Spacing, Colors} from '../styles'
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from "react-native";
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-native';
import { palette } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { size, lineheight } from '../styles/typography'
import { LinearGradient } from 'expo-linear-gradient'
import { Heading } from '../styles/heading';

const MovieDetailsSearch = () => {

     const [ movieDetails, setMovieDetails ] = useState([]);
     const [ movieSource, setMovieSource ] = useState([]);
     const { movie_id } = useParams();
     

     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '9a7382db50msh6462aa86d1ccba6p1903c0jsn219a84a3cae4',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };
  const filterResponse = (json) => {
    let filterList = []

    json.forEach((element, index) => {
      const hasExistingElement = filterList.find((item) => 
        item.source_id == element.source_id)

      if (!hasExistingElement)
        filterList.push(element)  
    });
    return filterList
  }

    useEffect(() => {
    fetch(`https://watchmode.p.rapidapi.com/title/${movie_id}/details/`, options)
      .then(response => response.json())
      .then((json) => {setMovieDetails(json)})
      .catch(err => console.error(err));

    fetch(`https://watchmode.p.rapidapi.com/title/${movie_id}/sources/`, options)
      .then(response => response.json())
      .then((json) => {
        const filterList = filterResponse(json)
        setMovieSource(filterList)})
      .catch(err => console.error(err));
  }, [movie_id])

    return (
      <View style={styles.outerContainer}>
        <Image
            style={{width: '100%', height: '100%', position: "absolute"}}
            source= {{uri: `${movieDetails.backdrop}` }}/>
          <View style={styles.overlay}/>
        <Heading/>
        <ScrollView style={styles.innerContainer}>
        <Image
          style={{width: 240, height: 350, borderRadius: 10, marginBottom: 15}}
            source= {{uri: `${movieDetails.backdrop}` }}/>
            <Text style={styles.h2}>{movieDetails.original_title}</Text>
            <Text style={styles.text}>{movieDetails.plot_overview}</Text>
        <View style={styles.tagContainer}>
            {movieSource.map(movie => (
              <View key={movie.source_id} style={styles.tags}>
                <Text style = {{color: "white"}} >{movie.name}</Text>
              </View> 
            ))}
        </View> 
      </ScrollView>
      </View>
      )
    } 

const styles = StyleSheet.create({
  container: {
    ...Containers.outerContainer,
  },

  tagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    width: 350,
  },

  tags:{
    backgroundColor:  palette.darkPurple,
    width: "auto",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette.darkPurple,
    marginRight: 10,
    marginBottom: 10,
  },

  outerContainer: {
    flex: 1,
    backgroundColor: palette.xiketic,
    alignItems: 'center',
  },

  innerContainer: {
    height: "80%",
    marginHorizontal: 20,
  },

  headerContainer: {
    paddingBottom: 20,
    width: "100%",
  },

  h2: {
    ...Typography.h2,
    color: palette.lavenderBlush,
    width: 350,
    marginBottom: 10
  },

  h3: {
    ...Typography.h3,
    color: palette.lavenderBlush,
    width: 350,
    marginBottom: 10
  },

  text: {
    color: palette.lavenderBlush,
    width: 350,
    marginBottom: 10
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    width: "100%", 
    height: "100%",
    position: "absolute",
    top: 0, 
    left: 0,
  },

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },

  
})



export default MovieDetailsSearch;

