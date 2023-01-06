import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const MovieDetailsSearch = () => {
    const [ movieDetails, setMovieDetails ] = useState([]);
    const { title } = useParams();
    const navigate = useNavigate();
  
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
              'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
            }
          };

     useEffect(() => {
        fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}`, options)
        .then((response) => response.json())
        .then((json) => {setMovieDetails(json.results)})
        .catch(err => console.error(err));
    }, [title])

      const goBack = () => {
        navigate(-1);
      };
    return (
    <View> 
        {movieDetails.map((movie) => (
        <View key={movie.title}> <Text>{movie.name}</Text></View>
        ))}
        <Button title="Go back" onPress={goBack}></Button>
     </View>
        )} 

export default MovieDetailsSearch;

