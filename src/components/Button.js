import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
display: inline-block;
background-color: transparent;
color: ${props => props.theme.text};
outline: none;
border:1.5px solid white;

font-size: ${props => props.theme.fontsm};
padding: 0.7rem 2.7rem;
border-radius: 50px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
&:hover{
  background-color:blue;
  border:none;
}

 `
 
const Button = ({text,link}) => {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
        </a>
      </Btn>
  )
}

export default Button