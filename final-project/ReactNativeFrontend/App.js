import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Text } from "react-native";

// // import Start from 'components/Start'
// // import Login from 'components/Login'
// // import ProfilePage from 'components/ProfilePage'
// // import Notfound from 'components/Notfound'


// import user from "./reducers/user";
// import thoughts from "./reducers/thoughts";

// const reducer = combineReducers({
//   user: user.reducer,
//   thoughts: thoughts.reducer,
// });

// const store = configureStore({ reducer });


export default function App() {
  return (
//     <Provider store={store}>
  
  <Text>App</Text>
//     {/* <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Start />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/main' element={<ProfilePage />} />
//       <Route path='*' element={<Notfound />} /> 
//     </Routes>
//     </BrowserRouter> */}
//     </Provider>
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

//-------Cecilias code----------//

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Splash } from './screens/Splash';
// import { LogIn } from './screens/LogIn';
// import { StartPage } from './screens/StartPage';
// import { Provider } from 'react-redux';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import user from './reducers/user';
// import { GamePage } from './screens/GamePage';

// const Stack = createNativeStackNavigator();

// const reducer = combineReducers({
//   user: user.reducer
// });
// const store = configureStore({reducer});
// const App = () => {
//   return (
//     <Provider store={store}>
//     <NavigationContainer>
//    <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: '#2d2d2d',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//         },
//       }}
//     >
//     <Stack.Screen name="Home" component={Splash} options={{ title: 'My home' }}/>
//     <Stack.Screen name="Log in" component={LogIn} options={{ title: '' }} />
//     <Stack.Screen name="StartPage" component={StartPage} options={{ title: ' ' }}/>
//     <Stack.Screen name="GamePage" component={GamePage} options={{ title: '' }}/>
//     </Stack.Navigator>
//     </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;