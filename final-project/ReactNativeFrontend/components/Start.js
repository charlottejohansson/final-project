import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-native';
import { Link } from 'react-router-native';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Image } from "react-native";
import { Colors, Typography, Containers } from '../styles'
import { PrimaryBtn, SecondaryBtn } from "../styles/buttons";


const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
  const [id, setId] = useState(null); // Input title of the show/movie
  // const [source, setSource] = useState(null); // Input title of the show/movie
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

  fetch(`https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=${title}&search_type=2`, options)
    .then(response => response.json())
    .then(response => setSearchResults(response.results))
    .catch(err => console.error(err));

  //   fetch(`https://watchmode.p.rapidapi.com/v1/title/${id}/sources`, options)
  //   .then(response => response.json())
  //   .then(response => setSearchResults(response.results))
  //   .catch(err => console.error(err));
   }

  return (
    <View style={styles.container}>
    <Link to='/login'><Text style={styles.text}>Sign in</Text></Link>

      <TextInput
        style={styles.text}
        placeholder="search for movie"
        type= "text"
        onChangeText={(text) => {
          setTitle(text);
          setId(text);
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
            <View>    
            <Link
            key={item.id}
            to={`/MovieDetailsSearch/${item.id}`}>
              <View>
                {/* <Image
                  style={{width: '50%', height: '100%'}}
                  source={{ uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}` }}/> */}
                 <View>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
              </View>
          </Link>
        </View>
        // <View>    
        // <Text key={item.id} style={styles.text}>{item.name} </Text>
        // </View>
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
                  <Text style={styles.text}>{movie.title}</Text>
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
      ...Containers.outerContainer,
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush,
    },
  
    textInput: {
      color: Colors.palette.lavenderBlush,
    }
});
  
export default Start;


