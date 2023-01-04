import React, {useState, useEffect} from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";


const Start = ({movies}) => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState(null); // Response 1: Results matching the input title


  const onFormSubmit = (event) => {
    event.preventDefault();
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8ab353f9dmsh0ed7b069671f69cp1bb323jsn7175036a5189',
		'X-RapidAPI-Host': 'watchmode.p.rapidapi.com'
	}
};


// fetch('https://watchmode.p.rapidapi.com/autocomplete-search/?search_value=Breaking%20Bad&search_type=1', options)
fetch(`https://www.omdbapi.com/?t=${event.target.value}&apikey=e170d343`)
	.then(response => response.json())
	.then(response => setSearchResults(response))
	.catch(err => console.error(err));
  }

return (
//code from previous project ( to row 50)
<View>
  <View>
    {movies.map((movie) => (
      <Link
        key={movie.id}
        to={`/MovieDetails/${movie.id}`}>
        <Image
          source={{require:`https://image.tmdb.org/t/p/w342${movie.poster_path}`}}
         />
         {console.log(`https://image.tmdb.org/t/p/w342${movie.poster_path}`)}
        <View>
          <Text>{movie.title}</Text>
          <Text>Released {movie.release_date}</Text>
        </View>
      </Link>
    ))}
  </View>


  <View style={styles.container}>
        <Text>Start page
  Click <Link to='/login'>here </Link> to sign up or sign in </Text>
    <Text>
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
		</Text>

    <TextInput
      placeholder="search for movie"
      type= "text"
      onChange={setTitle}
      onSubmitEditing={(event) => {
          setTitle(event.target.value);
          setSearchResults(null); // Remove previous results
          // setTitleDetails(null);
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
            <View key={item.name}> <Text>{item.name} </Text>
         
            {/* <Text> {item.streamingInfo} </Text>   */}
            {/* <Image source={{uri:`${item.backdropURLs[0]}`}} */}
            {/* <Image source={{ uri: `${item.backdropURLs}` }} */}
            {/* <Image source={{ uri: `https://image.tmdb.org/t/p/w342${item.posterURL}` }} */}
             {/* <Image source={{ uri: "https://image.tmdb.org/t/p/w92/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg" }}/> */}
      </View>
          )
        })
        }
      </View>
    )}
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


/// look for movie in internal API
// if (movie found) { return the found movie to the component},
// else do all the things that you will do anyway
// in the end in the else add the movie to your internal API/DATABSE