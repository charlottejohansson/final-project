import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { MOVIEDETAILS_URL } from '../utils/utils';


const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const { movie_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(MOVIEDETAILS_URL(movie_id))
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>

    <View>
      <Image
        source={`https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path}`}
        alt={movieDetails} />
      <View />

      <View>
        <Image
          source={`https://image.tmdb.org/t/p/w342${movieDetails.poster_path}`}
          alt={movieDetails} />
        <View>
          <Text>
            {movieDetails.title}
            <Text>⭐️ {Math.round(movieDetails.vote_average * 10) / 10}</Text>
          </Text>
          <Text>{movieDetails.tagline}</Text>
          <Text>{movieDetails.overview}</Text>
        </View>
      </View>
      <View>
        <Button title="Go back" onPress={goBack}>
        <Text>loading</Text>
        </Button>
      </View>
    </View>
    </>

  );
};

export default MovieDetails;

