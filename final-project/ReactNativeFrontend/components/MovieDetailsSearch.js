import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { Typography, Containers, Spacing, Colors} from '../styles'
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-native';
import { palette } from "../styles/colors";
import { spacing } from "../styles/spacing";
import { size, lineheight } from '../styles/typography'

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

      const goBack = () => {
        navigate(-1);
      };


    return (
      <View style={styles.outerContainer}>
        <Image
            style={{width: '100%', height: '100%', position: "absolute"}}
            source= {{uri: `${movieDetails.backdrop}` }}/>

      <View style={styles.overlay}/>
      <View style={styles.innerContainer}>
        <Text style={styles.h2}>{movieDetails.original_title}</Text>
        <Text style={styles.text}>{movieDetails.plot_overview}</Text>
      <View style={styles.tagContainer}>
        {movieSource.map(movie => (
          <View style={styles.tags}>
           <Text key={movie.source_id} style = {{color: "white"}} >{movie.name}</Text>
           </View> 
          ))}
        </View> 
      </View>

      <View>
          <Button title="Go back" onPress={goBack}></Button>
        </View>
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
  },

  tags:{
    backgroundColor: palette.xiketic,
    width: "auto",
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: palette.darkPurple,
    marginLeft: 10,
    marginBottom: 10,
  },

  outerContainer: {
    flex: 1,
    backgroundColor: palette.xiketic,
    alignItems: 'center',
  },

  innerContainer: {
    height: "80%",
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: "flex-end"
  },

  headerContainer: {
    paddingBottom: 20,
    width: "100%",
  },

  h2: {
    ...Typography.h2,
    color: palette.lavenderBlush
  },

  h3: {
    ...Typography.h3,
    color: palette.lavenderBlush
  },

  text: {
    color: palette.lavenderBlush
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
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

