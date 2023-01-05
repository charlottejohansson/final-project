// import React from 'react';
import { NativeRouter, Routes, Route } from 'react-router-native';
import React, {useState, useEffect} from "react";

// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { StyleSheet, Text, View, Button, TextInput, Image } from "react-native";
import Start from './components/Start'
import Login from './components/Login'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import Notfound from './components/Notfound'
import user from "./reducers/user";
import profiles from "./reducers/profiles";

//code from previous project ( to row 21)
import MovieDetails from './components/MovieDetails'
import { POPULARMOVIE_URL } from './utils/utils'

const reducer = combineReducers({
  user: user.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });

export default function App() {
  //code from previous project ( to row 57 & row 68 & 69)
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(POPULARMOVIE_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/main' element={<ProfilePage />} /> 
          <Route path='*' element={<Notfound />} /> 
          <Route path="/" element={<Start movies={movieList} />} />
          <Route path="/MovieDetails/:movie_id" element={<MovieDetails />} />
        </Routes>
      </NativeRouter> 
    </Provider>
  );
}
