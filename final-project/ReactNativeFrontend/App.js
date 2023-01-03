import React from 'react';
// import { NativeRouter, Routes, Route } from 'react-router-native';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';


import Start from './components/Start'
import Login from './components/Login'
import Register from './components/Register'
import ProfilePage from './components/ProfilePage'
import Notfound from './components/Notfound'


import user from "./reducers/user";
import profiles from "./reducers/profiles";

const reducer = combineReducers({
  user: user.reducer,
  profiles: profiles.reducer,
});

const store = configureStore({ reducer });


export default function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Start />} />
      <Route  path='/login' element={<Login />} />
      <Route  path='/register' element={<Register />} />
      <Route  path='/main' element={<ProfilePage />} />
      <Route  path='*' element={<Notfound />} /> 
    </Routes>
    </BrowserRouter> 
    </Provider>
  );
}


//---------------standard app code-------------//

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app! TESTING again</Text>
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
