import React from 'react'
import styled from 'styled-components'


const Heading = styled.p`
display:flex;
justify-content:center;
align-items:center;
color:#fff;
background:linear-gradient(90deg, #13A5D3 0%, #1B6BEC 32.29%, #9824CF 100%);
font-size:${props => props.theme.fontsm};
padding:3px 3px;
`

function Header() {
  return (
    <div>
        <Heading>
        identit is now 100% adjective, let’s get hyped!
        </Heading>
    </div>
  )
}

export default Header