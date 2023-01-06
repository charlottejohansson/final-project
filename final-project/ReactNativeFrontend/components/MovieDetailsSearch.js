import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const MovieDetailsSearch = () => {
  const [ movieDetails, setMovieDetails ] = useState({});
  const { movie_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
          'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
        }
      };
  
    fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${movie_id}&search_type=2`, options)
    .then(response => response.json())
    .then(response => setMovieDetails(response.results))
    .catch(err => console.error(err));
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <View>
     <Text>{movieDetails.name}</Text>
      <View>
        <Button title="Go back" onPress={goBack}>
        <Text>loading</Text>
        </Button>
      </View>
    </View>
  );
};

export default MovieDetailsSearch;

