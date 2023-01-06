import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-native";
import { API_URL } from '../utils/utils'
import user from '../reducers/user';
import { StyleSheet, Text, View, Button, TouchableHighlight, TextInput, Image } from "react-native";
import { Colors, Typography, Containers } from '../styles'
import { PrimaryBtn, SecondaryBtn } from "../styles/buttons";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("login");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const accessToken = useSelector((store) => store.user.accessToken);
    useEffect(() => {
        if (accessToken) {
            navigate("/main");
        }
    }, [accessToken])

    const passwordInputRef = createRef(); // meaning?

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
                    alert("error, could not find user - make sure you've registered and that the password is correct ");
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
            <Text style={styles.text}> Login page! </Text>
            <TextInput
                placeholder="Enter username" 
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                autoCapitalize="none" //meaning?
                returnKeyType="next" // meaning?
                blurOnSubmit={false} // meaning?
                onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()} // meaning?
            />
            <TextInput 
                placeholder="Enter Password" 
                ref={passwordInputRef}
                value={password} 
                blurOnSubmit={false}
                secureTextEntry={true}
                onChangeText={setPassword}
                returnKeyType="next"
            />
            <Button 
                title="login"
                onPress={(onFormSubmit)}
                type="submit"
            />
            <Text style={styles.text}>Don't have an account?</Text>
            <Link to='/register'>
                <Text>Sign up here</Text>
            </Link>
            <Button 
                title="Back to start page"
                onPress={() => { navigate("/"); dispatch(user.actions.setAccessToken(null));}}
                type="submit"
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      ...Containers.outerContainer,
    },
  
    text: {
      ...Typography.body2,
      color: Colors.palette.lavenderBlush,
    },
  
    textInput: {
      color: Colors.palette.lavenderBlush,
    }
});


export default Login;



  
