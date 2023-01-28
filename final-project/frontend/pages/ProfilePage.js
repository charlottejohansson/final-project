import React, { useEffect } from "react";
import user from '../reducers/user';
import { useDispatch, useSelector } from "react-redux";
import profiles from "../reducers/profiles.js";
import { API_URL } from '../utils/utils'
import { useNavigate } from "react-router-native";

import { StyleSheet, Text, View } from "react-native";
import { Colors, Containers, Typography, Spacing } from '../styles'
import { Heading } from '../styles/heading'
import { PrimaryBtn} from "../styles/button";
import { FontAwesome5 } from '@expo/vector-icons'; 



const ProfilePage = () => {
    const profilesItems = useSelector((store) => store.profiles.items);
    const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.accessToken);
    const navigate = useNavigate();

    useEffect( () => {
        if (!accessToken) {
            navigate("/login");
        }
    }, []);
    
    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": accessToken
            }
        }

        fetch(API_URL("profiles"), options)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    dispatch(profiles.actions.setItems(data.response));
                    dispatch(profiles.actions.setError(null));
                } else {
                    dispatch(profiles.actions.setItems([]));
                    dispatch(profiles.actions.setError(data.response));
                }
            })
    }, []);

    return (
        <View style={{...Containers.outerContainer}}>
            <Heading/>
            <View style={styles.container}>
                <Text style={styles.h2}>Profile functions</Text>
                <Text style={styles.h2}>coming soon</Text>
                <FontAwesome5 
                    style={{marginTop: Spacing.spacing.L}}
                    name="gift" 
                    size={100} 
                    color={Colors.palette.lavenderBlush} /> 
            </View>
            <PrimaryBtn 
                    title="Sign out"
                    onPress={() => { navigate("/"); dispatch(user.actions.setAccessToken(null));}} //doesn't work to sign in again, you need to reload the page
                    type="submit"
                />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: 'center',
        paddingLeft: Spacing.spacing.M,
        paddingRight: Spacing.spacing.M,
        opacity: "40%",
        height: "70%"
    },

    h2: {
        ...Typography.h2,
        color: Colors.palette.lavenderBlush
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush
    },
  
    textInput: {
      color: Colors.palette.lavenderBlush
    }
});


export default ProfilePage;