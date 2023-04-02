import React from 'react'
import styled from 'styled-components'
import {Link}  from "react-router-dom"

const LogoText = styled.h1`
font-family:'Cooper Lt BT';
font-size:${props => props.theme.fontxl};
color:${ props =>props.theme.text};
transition:all 0.2s ease;
&:hover{
    transform:scale(1.1);
}

@media (max-width: 64em){
  font-size: ${props => props.theme.fontxxl};
  
  }
`


const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
            identiti
        </Link>
     </LogoText>
  )
}

export default Logo