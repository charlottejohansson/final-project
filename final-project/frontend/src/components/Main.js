import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import thoughts from "reducers/thoughts";
import { API_URL } from "utils/utils";
import { useNavigate, Link } from "react-router-dom";
import { Title, Wrapper} from 'styles/Styles';
import styled from 'styled-components'

const Main = () => {
    const thoughtItems = useSelector((store) => store.thoughts.items);
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
        fetch(API_URL("thoughts"), options)
            .then(res => res.json())
            .then(data => {
                if(data.success) {
                    dispatch(thoughts.actions.setItems(data.response));
                    dispatch(thoughts.actions.setError(null));
                } else {
                    dispatch(thoughts.actions.setItems([]));
                    dispatch(thoughts.actions.setError(data.response));
                }
            })
    }, []);

    return (
        <>
        <Wrapper>
            <MainBox>
                <Title>Yey! Your're now logged in!</Title> 
                <h2>Se all posted thoughts below!</h2>
                {thoughtItems.map((item) => {
                    return <Thoughts key={item._id}>{item.message}</Thoughts>
                })}
            </MainBox> 
         </Wrapper>  
        </>
    )
}

const MainBox = styled.div`
background-color: pink;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
width: 50vw;
height: auto;
padding: 20px;
box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
`

const Thoughts = styled.p`
display: flex;
padding: 10px;
background: #F7EFE4;
box-shadow: 8px 6px 5px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 6px 5px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 6px 5px -6px rgba(0,0,0,0.75);
`

export default Main;