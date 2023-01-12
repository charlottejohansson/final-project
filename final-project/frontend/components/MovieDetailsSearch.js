import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Typography, Containers, Spacing, Colors} from '../styles'
import { Heading } from '../styles/heading';

const MovieDetailsSearch = () => {

     const [ movieDetails, setMovieDetails ] = useState([]);
     const [ movieSource, setMovieSource ] = useState([]);
     const { movie_id } = useParams();
     const navigate = useNavigate();
     
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
      <View style={{...Containers.outerContainer}}>
        <Image
          style={styles.background}
          source= {{uri: `${movieDetails.backdrop}` }}/>
        <View style={styles.overlay}/>
        <Heading/>
        <ScrollView style={styles.innerContainer}>
          <Image
            style={styles.poster}
              source= {{uri: `${movieDetails.backdrop}` }}/>
              <Text style={styles.h2}>{movieDetails.original_title}</Text>
              <Text style={styles.text}>{movieDetails.plot_overview}</Text>
          <View style={styles.tagContainer}>
              {movieSource.map(movie => (
                <View 
                  key={movie.source_id} 
                  style={styles.tags}>
                  <Text style={{color: Colors.palette.lavenderBlush}} >{movie.name}</Text>
                </View> 
              ))}
          </View>
        </ScrollView>
      </View>
      )
    } 

const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%', 
    position: "absolute"
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
    width: "100%", 
    height: "100%",
    position: "absolute",
    top: 0, 
    left: 0
  },

  innerContainer: {
    marginHorizontal: Spacing.spacing.S,
    height: "80%",
    width: 340
  },

  poster: {
    width: 240,
    height: 350, 
    borderRadius: 10, 
    marginBottom: 15
  },

  tagContainer: {
    marginTop: Spacing.spacing.S,
    flexDirection: "row",
    flexWrap: "wrap"
  },

  tags:{
    backgroundColor: Colors.palette.darkPurple,
    borderColor: Colors.palette.darkPurple,
    marginRight: Spacing.spacing.XS,
    marginBottom: Spacing.spacing.XS,
    padding: 5,
    borderRadius: 5,
    borderWidth: 1
  },

  h2: {
    ...Typography.h2,
    color: Colors.palette.lavenderBlush,
    marginBottom: Spacing.spacing.XS
  },

  h3: {
    ...Typography.h3,
    color: Colors.palette.lavenderBlush,
    marginBottom: Spacing.spacing.XS
  },

  text: {
    color: Colors.palette.lavenderBlush,
    marginBottom: Spacing.spacing.XS
  }
})

export default MovieDetailsSearch;

