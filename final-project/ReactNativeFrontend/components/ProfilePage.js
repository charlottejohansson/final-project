import React, { useEffect } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import profiles from "../reducers/profiles.js";
import { API_URL } from '../utils/utils'
import { useNavigate, Link } from "react-router-native";
import { StyleSheet, Text, View, Button } from "react-native";
import { Colors, Typography, Containers } from '../styles'
import { Heading } from '../styles/heading'
import { PrimaryBtn} from "../styles/buttons";
import user from '../reducers/user';


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
                <Text style={styles.text}>ProfilePage - it's working!</Text>
                <PrimaryBtn 
                    title="Sign out"
                    onPress={() => { navigate("/"); dispatch(user.actions.setAccessToken(null));}} //doesn't work to sign in again, you need to reload the page
                    type="submit"
                />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
      justifyContent: "center",
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush,
    },
  
    textInput: {
      color: Colors.palette.lavenderBlush,
    }
});


export default ProfilePage;