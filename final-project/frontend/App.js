import { NativeRouter, Routes, Route } from 'react-router-native';
import React, {useState, useEffect} from "react";
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import Start from './components/Start'
import Login from './components/Login'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import Notfound from './components/Notfound'
import profiles from "./reducers/profiles";
import MovieDetails from './components/MovieDetails'
import MovieDetailsSearch from './components/MovieDetailsSearch'

import user from "./reducers/user"; 
import { POPULARMOVIE_URL } from './utils/utils'

const reducer = combineReducers({
  user: user.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });

export default function App() {
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
          <Route path="/MovieDetailsSearch/:movie_id" element={<MovieDetailsSearch />} />
        </Routes>
      </NativeRouter> 
    </Provider>
  );
}
