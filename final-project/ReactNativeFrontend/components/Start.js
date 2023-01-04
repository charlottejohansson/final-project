import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";

const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState(null); // Response 1: Results matching the input title
  const { search_result } = useParams(); // need this?


  const onFormSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
        'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
      }
    };

  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}`, options)
    .then(response => response.json())
    .then(response => setSearchResults(response.results))
    .catch(err => console.error(err));
  }

  return (
    <View style={styles.container}>
    <Link to='/login'><Text>Click here</Text></Link>

      <TextInput
        placeholder="search for movie"
        type= "text"
        onChangeText={(text) => {
          setTitle(text);
          setSearchResults(null); // Remove previous results
        }}
      />

      <Button
        title="Search"
        onPress={(onFormSubmit)}
        type="submit"
      />

    {searchResults && (
      <View>
        {searchResults.map((item) => {
          return (
            <View key={item.name}> <Text>{item.name} </Text></View>
          )
        })}
      </View>
    )}

      <View>
        {movies.map((movie) => (
          <Link
            key={movie.id}
            to={`/MovieDetails/${movie.id}`}>
              <View>
                <Image
                  style={{width: '50%', height: '100%'}}
                  source={{ uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}` }}/>
                <View>
                  <Text>{movie.title}</Text>
                  <Text>Released {movie.release_date}</Text>
                </View>
              </View>
          </Link>
        ))}
      </View>
    </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightpink',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default Start;

