import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import profiles from "../reducers/profiles.js";
import { API_URL } from '../utils/utils'
import { useNavigate, Link } from "react-router-dom";
import { StyleSheet, Text, View, Button } from "react-native";

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
      
        <View style={styles.container}>
             <Text>ProfilePage - it's working!</Text>

                <Button 
                title="Sign out"
                onPress={() => { navigate("/"); dispatch(user.actions.setAccessToken(null));}} //doesn't work to sign in again, you need to reload the page
                type="submit"
                />
         
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



export default ProfilePage;