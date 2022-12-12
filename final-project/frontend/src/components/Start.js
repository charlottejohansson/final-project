import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Wrapper} from 'styles/Styles';
import styled from 'styled-components'

const Start = () => {
return (
<Wrapper>
<StartForm>
<Title>
Start
</Title>
<StartButton>
click <Link to='/login'>here </Link> to sign up or sign in  
</StartButton>
</StartForm>
</Wrapper>
)
}

const StartForm = styled.div`
background-color: pink;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 50vw;
height: auto;
padding: 20px;
box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
-webkit-box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
-moz-box-shadow: 8px 11px 5px -6px rgba(0,0,0,0.75);
`

const StartButton = styled.p`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Dongle';
  font-size: 30px;
  a {
    color: #80000E;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default Start;