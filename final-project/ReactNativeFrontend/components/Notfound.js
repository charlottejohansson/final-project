import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Link } from "react-router-native";

const NotFound = () => {


    return (
        <>

     <View style={styles.container}>
        <Text>Not found :(
        Click <Link to='/'>here </Link> to go to start page</Text>
    </View>
    </>

    )}


    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        },
        });

    

export default NotFound;

