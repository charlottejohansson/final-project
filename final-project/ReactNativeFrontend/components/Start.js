import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View, Button } from "react-native";

const Start = () => {
return (
  <View style={styles.container}>
    <Text>Start page
  Click <Link to='/login'>here </Link> to sign up or sign in </Text>
  </View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: 'yellow',
alignItems: 'center',
justifyContent: 'center',
},
});

export default Start;
