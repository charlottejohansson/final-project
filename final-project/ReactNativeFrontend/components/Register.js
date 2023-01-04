import React, {useEffect, useState, createRef} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-native";
import { API_URL } from '../utils/utils'
import user from '../reducers/user';
import { StyleSheet, Text, View, TextInput, Button} from "react-native";


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
        <>

        <View style={styles.container} onPress={(onFormSubmit)}>
        <Text> Register page! </Text>
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


        <Text>
            {password && password.length < 8
                ? 'password must be over 8 characters'
                : ''}
            <Button 
                title="Sign up"
                onPress={(onFormSubmit)}
                type="submit"
                />

                {error !== null && (
                <Text style={{ fontSize: '21px', color: 'red' }}>{error}</Text>
            )}
        </Text>
      </View>
      </>
    )}



    const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        },
        });

    

export default Register;


   
