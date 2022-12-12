import React from "react";
import { Link } from "react-router-dom";
import { Title } from 'styles/Styles';

const NotFound = () => {
    return (
    <>
        <Link to="/login"> GO TO LOGIN</Link>
        <Title>Sorry, no such page..</Title>;
    </>
    ) 
}

export default NotFound;

