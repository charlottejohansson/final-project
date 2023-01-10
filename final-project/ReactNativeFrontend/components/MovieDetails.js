import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import { MOVIEDETAILS_URL } from '../utils/utils';
import { Colors, Typography, Containers } from '../styles'
import { Heading } from '../styles/heading';
import { palette } from '../styles/colors';

const MovieDetails = () => {
  const [ movieDetails, setMovieDetails ] = useState({});
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
    <View style={styles.outerContainer}>
        <Image
          style={{width: '100%', height: '100%', position: "absolute"}}
          source={{ uri: `https://image.tmdb.org/t/p/w342${movieDetails.poster_path}` }}/>
        <View style={styles.overlay}/>
      <Heading/>
      <View style={styles.innerContainer}>
        <View>
          <Text style={styles.h2}>{movieDetails.title}</Text>
          <Text style={styles.h3}>{Math.round(movieDetails.vote_average * 10) / 10}</Text>
          <Text style={styles.text}>{movieDetails.overview}</Text>
        </View>
      </View>
      <View>
        <Button title="Go back" onPress={goBack}>
        <Text>loading</Text>
        </Button>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
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

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)", 
    width: "100%", 
    height: "100%",
    position: "absolute",
    top: 0, 
    left: 0
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
  }

});

export default MovieDetails;