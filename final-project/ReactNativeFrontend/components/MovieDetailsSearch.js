import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { Typography, Containers, Spacing } from '../styles'
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-native';

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
      <View style={styles.container}>
         <Image
          style={{width: '100%', height: '100%', position: "absolute"}}
          source={{ uri: `https://cdn.watchmode.com/${movieDetails.backdrop}` }}/>
        <Text>{movieDetails.original_title}</Text>
        <Text>{movieDetails.plot_overview}</Text>

         {movieSource.map(movie => (
        <Link
        key={movie.source_id}
        to={movie.web_url}>
        <Text> Streaming site:{movie.name}</Text>
        </Link>
          ))}
        <View>
          <Button title="Go back" onPress={goBack}></Button>
        </View>
      </View>
      
      )
}


export default MovieDetailsSearch;

