import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-native';
import { MOVIEDETAILS_URL } from '../utils/utils';

import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Colors, Typography, Spacing, Containers } from '../styles'
import { Heading } from '../styles/heading';

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

  return (
    <View style={{...Containers.outerContainer}}>
        <Image
          style={styles.background}
          source={{ uri: `https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}} />
        <View style={styles.overlay}/>
      <Heading/>
      <ScrollView style={styles.innerContainer}>
      <Image
         style={styles.poster}
         source={{ uri:`https://image.tmdb.org/t/p/w342/${movieDetails.poster_path}`}} />
        <View>
          <Text style={styles.h2}>{movieDetails.title}</Text>
          <Text style={styles.h3}>Rating: {Math.round(movieDetails.vote_average * 10) / 10}</Text>
          <Text style={styles.text}>{movieDetails.overview}</Text>
        </View>
      </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({
  background: {
    width: '100%', 
    height: '100%', 
    position: "absolute"
  },

  overlay: {
    backgroundColor: 'rgba(0,0,0,0.8)',
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
});

export default MovieDetails;