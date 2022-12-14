import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from "react-router-native";
import { palette } from "../styles/colors";

const NotFound = () => {
    return (
        <View style={styles.container}>
            <Text>Not found :( Click </Text> 
            <Link to='/'><Text>here</Text></Link> 
            <Text>to go to start page</Text>
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: palette.xiketic,
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default NotFound;

