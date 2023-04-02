import React from 'react'
import Profile from "../assests/profile.png"
import styled from 'styled-components'

const ImageContainer =styled.div`
width:240px;
height:350px;
border-radius:10px;
filter:drop-shadow(0px 4px 39px rgba(255,255,255,0.25));
margin-left:2rem;
img{
    width:100%;
    height:100%;
    object-fit:contain;
border-radius:10px;

}
@media (max-width: 64em) {
  min-width: 40vh;
}
`
const CoverProfile = () => {
  return (
    <ImageContainer>
        <img src={Profile} alt="Profile" />
        </ImageContainer>
  )
}

export default CoverProfile