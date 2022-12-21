import styled from 'styled-components'

export const Title = styled.h1 `
font-size: 40px;
text-transform: uppercase;
font-family: 'Dongle';
color: #80000E;
`

export const Wrapper = styled.div `
font-family: 'Dongle', sans-serif;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export const RadioButtonWrapper = styled.div `
display: flex;
flex-direction: row;
width: 160px;
justify-content: space-between;
align-items: center;
`

export const Form = styled.form `
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


export const Input = styled.input `
// border: solid blue 2px;
background: #F7EFE4;
border: none;
border-bottom: 2px solid rgb(255, 255, 255);
display: flex;
margin: 5px;
padding: 10px;
border-radius: 5px;
width: 200px;

`

export const Button = styled.button `
margin: 10px;
width: 75px;
border-radius: 8px;
border: none;
text-align: center;
font-size: 20px;
font-family: 'Dongle';
background: #F7B258;
color: #80000E;
&:hover {
    background: #D5640B;
}
`

export const Label = styled.label`
font-size: 28px;
font-family: 'Dongle';
color: #80000E;
text-align: center;
margin: 0;
`

export const LinkWrapper = styled.div `
font-size: 20px;
font-family: 'Dongle';
color: #80000E;
text-align: center;
p {
margin: 0;
}
a {
text-decoration: none;
color: #80000E;
}
a:hover {
    text-decoration: underline;
}
`