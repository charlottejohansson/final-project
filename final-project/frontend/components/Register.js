import React, {useEffect, useState, createRef} from "react";
import user from '../reducers/user';
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-native";
import { API_URL } from '../utils/utils'

import { StyleSheet, Text, View } from "react-native";
import { Colors, Containers, Typography, Spacing } from '../styles'
import { PrimaryBtn } from "../styles/buttons";
import { InputField } from "../styles/inputfield";
import { Heading } from "../styles/heading";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("register");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((store) => store.user.accessToken);

    useEffect( () => {
        if (accessToken) {
        navigate("/main");
        }
    }, [accessToken])

    const onFormSubmit =(event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password })
        }
        fetch(API_URL(mode), options)
            .then(response => response.json())
            .then(data => {
                if(data.success) {
                    batch(()=> {
                        dispatch(user.actions.setUsername(data.response.username));
                        dispatch(user.actions.setUserId(data.response.id))
                        dispatch(user.actions.setAccessToken(data.response.accessToken));
                        dispatch(user.actions.setError(null));
                    });
                } else {
                    alert("Password must be over 8 characters.");
                    batch (() => {
                        dispatch(user.actions.setUsername(null));
                        dispatch(user.actions.setUserId(null))
                        dispatch(user.actions.setAccessToken(null));
                        dispatch(user.actions.setError(data.response));
                    });
                }
            })
    }

    return (
        <View 
            style={styles.container} 
            onPress={(onFormSubmit)}>
            <Heading/>
            <View style={styles.container} onPress={(onFormSubmit)}>
                <View style={styles.innerContainer}>
                    <Text style={styles.h2}>Register</Text>
                    <InputField
                        placeholder="Enter username"
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize="none"
                        returnKeyType="next" 
                        blurOnSubmit={false} 
                        onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()} // meaning?
                    />
                    <InputField 
                        placeholder="Enter Password" 
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        returnKeyType="next" 
                    />
                    <PrimaryBtn 
                        title="Sign up"
                        onPress={(onFormSubmit)}
                        type="submit"
                    />
                    <Text style={styles.text}>
                        {password && password.length < 8
                            ? 'Password must be over 8 characters'
                            : ''}
                        {error !== null && (
                            <Text style={{ fontSize: '21px', color: 'white' }}>{error}</Text>
                        )}
                    </Text>
                </View>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
      justifyContent: "center"
    },

    innerContainer: {
        gap: Spacing.spacing.M,
        alignContent: "flex-start",
        width: 300
    },

    h2: {
        ...Typography.h2,
        color: Colors.palette.lavenderBlush,
        paddingBottom: Spacing.spacing.XS
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush,
      textAlign: "center"
    },
});

export default Register;