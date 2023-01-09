import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import MovieDetails from './MovieDetails';

const MovieDetailsSearch = () => {

     const [ movieDetails, setMovieDetails ] = useState([]);
     const [ movieSource, setMovieSource ] = useState([]);
     const { movie_id } = useParams();
     const navigate = useNavigate();

     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };
    
    useEffect(() => {
    fetch(`https://watchmode.p.rapidapi.com/title/${movie_id}/details/`, options)
      .then(response => response.json())
      .then((json) => {setMovieDetails(json.results)})
      .catch(err => console.error(err));

    fetch(`https://watchmode.p.rapidapi.com/title/${movie_id}/sources/`, options)
      .then(response => response.json())
      .then((json) => {setMovieSource(json.results)})
      .catch(err => console.error(err));
  }, [movie_id])

      const goBack = () => {
        navigate(-1);
      };



      return (
        <View>
         {movieSource.map(movie => (
            <View key={movie.id.value}>
              <Text>
                Movie: {movie.name} {movie.name}
              </Text>
            </View>
          ))}
        </View>
      )
  



      // return (
      //   <View>
      //     <Text>{movie_id.title}</Text>
      //     <Button title="Go back" onPress={goBack}></Button>
      //     </View>
      // )
}


export default MovieDetailsSearch;

