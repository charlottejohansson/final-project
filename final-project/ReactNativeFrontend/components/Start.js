import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableHighlight, TextInput } from "react-native";
import { Colors, Typography, Containers } from '../styles'
import { PrimaryBtn, SecondaryBtn } from "../styles/buttons";



const Start = () => {

  const [title, setTitle] = useState(null); // Input title of the show/movie
	const [searchResults, setSearchResults] = useState(null); // Response 1: Results matching the input title
	const [titleDetails, setTitleDetails] = useState(null); // Response 2: ID of Title selected by the user from the results
	const [streamingInfo, setStreamingInfo] = useState(null); // Response 2: Streaming availability of the selected title


  const getTitle = async () => {
    try {
      const res = await axios.get('api/search/', {
        params: {title}
      });
      const {data} = res;
      setSearchResults(data.results); // Storing the response
    } catch (error) {}
  };


  const onFormSubmit = (event) => {
    getTitle();
    event.preventDefault();
    // event.stopPropagation(); // meaning?
  }

return (
  <View style={styles.container} onPress={(onFormSubmit)}>
    <Text style={styles.text}>
				Get Streaming details of Movie and TV Shows from 150+ Streaming
				platforms
		</Text>

    <TextInput
      style={styles.textInput}
      placeholder="search for movie"
      type= "text"
      value={title}
      onChangeText={setTitle}
      onSubmitEditing={(event) => {
        setTitle(event.target.value);
        setSearchResults(null); // Remove previous results
        setTitleDetails(null);
      }}

      // style={styles.input}
      // onChangeText={setUsername}
      // value={username}
      // onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()} // meaning?


    />
    <PrimaryBtn
      style={styles.button}
      onPress={(onFormSubmit)}
      type="submit">
    </PrimaryBtn>
       
			{searchResults && (
        <View>
          {searchResults?.map((item) => {
          <View key={item.title}/>
        })} 
        </View>
)}

    <Text style={styles.text}>Start page
  Click <Link to='/login'>here </Link> to sign up or sign in </Text>
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
