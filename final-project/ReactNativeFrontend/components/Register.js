import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-native";
import { API_URL } from '../utils/utils'
import user from '../reducers/user';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Image } from "react-native";
import { Colors, Typography, Containers } from '../styles'
import { PrimaryBtn } from "../styles/buttons";
import { InputField } from "../styles/inputfield";
import { Heading } from "../styles/heading";
import { spacing } from "../styles/spacing";

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

    const passwordInputRef = createRef();

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
                    alert("error, doesn't work...");
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
        <View style={styles.container} onPress={(onFormSubmit)}>
            <Heading/>
            <View style={styles.container} onPress={(onFormSubmit)}>
                <View style={styles.innerWrapper}>
                    <Text style={styles.h2}>Register</Text>
                    <InputField
                        placeholder="Enter username" 
                        style={styles.input}
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize="none"
                        returnKeyType="next" 
                        blurOnSubmit={false} 
                        onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()} // meaning?
                    />
                    <InputField 
                        placeholder="Enter Password" 
                        ref={passwordInputRef}
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
      justifyContent: "center",
    },

    innerWrapper: {
        gap: spacing.M,
        alignContent: "flex-start",
    },

    h2: {
        ...Typography.h2,
        color: Colors.palette.lavenderBlush,
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush,
      textAlign: "center"
    },
  
    textInput: {
      color: Colors.palette.lavenderBlush,
    }
});

export default Register;