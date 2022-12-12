import React, {useEffect, useState} from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { API_URL } from "utils/utils";
import user from "reducers/user";
import { Form, Input, Button, Wrapper, Label, RadioButtonWrapper } from 'styles/Styles';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [mode, setMode] = useState("login");
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
        <Wrapper>
        <Form onSubmit={onFormSubmit}>
        <RadioButtonWrapper>
        <div>
        <Label htmlFor="register">Register</Label>
        <input type="radio" id="register" checked={mode === "register"} onChange={()=>setMode("register")}/>
        </div>
        <div>
        <Label htmlFor="login">Login</Label>
        <input type="radio" id="login" checked={mode === "login"} onChange={()=>setMode("login")}/>
        </div>
        </RadioButtonWrapper>
            <Label htmlFor="username">Username</Label>
            <Input 
                type="text" 
                id="username" 
                value={username} 
                onChange={e => setUsername(e.target.value)}/>
            <Label htmlFor="password">Password</Label>
            <Input 
                type="password" 
                id="password" 
                value={password} 
                onChange={e => setPassword(e.target.value)}/>
            {password && password.length < 8
            ? 'password must be over 8 characters'
            : ''}
            <Button type="submit">Submit</Button>
            {error !== null && (
            <p style={{ fontSize: '21px', color: 'red' }}>{error}</p>
            )}
        </Form>
        </Wrapper>
    </> 
    );
}

export default Login;