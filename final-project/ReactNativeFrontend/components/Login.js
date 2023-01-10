import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-native";
import { API_URL } from '../utils/utils'
import user from '../reducers/user';

import { StyleSheet, Text, View } from "react-native";
import { Typography, Containers, Colors } from '../styles'
import { PrimaryBtn } from "../styles/buttons";
import { InputField } from "../styles/inputfield";
import { Heading } from "../styles/heading";
import { spacing } from "../styles/spacing";

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
        <View style={styles.container}>
            <Heading/> 
            <View style={styles.container} onPress={(onFormSubmit)}>
                <View style={styles.innerWrapper}>
                    <Text style={styles.h2}>Login</Text>
                    <InputField
                        placeholder="Username" 
                        onChangeText={setUsername}
                        value={username}
                        autoCapitalize="none" //meaning?
                        returnKeyType="next" // meaning?
                        blurOnSubmit={false} // meaning?
                        onSubmitEditing={() => passwordInputRef.current &&  passwordInputRef.current.focus()} // meaning?
                    />
                    <InputField 
                        placeholder="Password" 
                        ref={passwordInputRef}
                        blurOnSubmit={false}
                        secureTextEntry={true}
                        textContentType={password}
                        onChangeText={setPassword}
                        returnKeyType="next"
                    />
                    <PrimaryBtn 
                        title="Login"
                        onPress={(onFormSubmit)}
                        type="submit"
                    />
                    <Text style={styles.text}>Don't have an account?
                        <Link to='/register'>
                            <Text style={styles.linkText}>Sign up here</Text>
                        </Link>
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

    h2: {
        ...Typography.h2,
        color: Colors.palette.lavenderBlush,
        paddingBottom: spacing.XS,
    },
  
    text: {
        ...Typography.body2,
        color: Colors.palette.lavenderBlush,
        textAlign: "center",
    },

    linkText: {
        ...Typography.body2,
        color: Colors.palette.frostbite,
        paddingTop: 2,
        paddingLeft: 4,
    },

    innerWrapper: {
        width: "100%",
        alignContent: "flex-start"
    }
});

export default Login;



  
